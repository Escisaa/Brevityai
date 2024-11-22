import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const session_id = url.searchParams.get("session_id");

    if (!session_id) {
      return new Response(
        JSON.stringify({
          error: "session_id is required",
          status: "error",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent"],
    });

    // Log for debugging
    console.log("Session data:", {
      id: session.id,
      payment_status: session.payment_status,
      status: session.status,
      payment_intent: session.payment_intent?.status,
    });

    // Check payment status
    if (
      session.payment_status === "paid" ||
      (session.status === "complete" &&
        session.payment_intent?.status === "succeeded")
    ) {
      return new Response(
        JSON.stringify({
          status: "paid",
          session: {
            id: session.id,
            payment_status: session.payment_status,
            status: session.status,
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // Handle pending/processing status
    if (
      session.payment_status === "pending" ||
      session.payment_intent?.status === "processing"
    ) {
      return new Response(
        JSON.stringify({
          status: "pending",
          payment_status: session.payment_status,
          session_status: session.status,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // Handle other cases
    return new Response(
      JSON.stringify({
        status: "failed",
        payment_status: session.payment_status,
        session_status: session.status,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Failed to retrieve session:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to retrieve session",
        details: error.message,
        status: "error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
