import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return new Response(JSON.stringify({ error: "Missing priceId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create the checkout session with proper URL parameters
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      // Add the session ID to the success URL
      success_url: `${process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL,
      // Add metadata if needed
      metadata: {
        priceId: priceId,
      },
      // Expire after 30 minutes
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    return new Response(
      JSON.stringify({
        id: session.id,
        url: session.url,
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
    console.error("Stripe API error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
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
