"use client";
import React, { useState, useEffect } from "react";
import {
  FaLink,
  FaClipboard,
  FaClipboardCheck,
  FaTrash,
  FaSpinner,
} from "react-icons/fa";
import { useLazyGetSummaryQuery } from "../services/article";

const DemoSection = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [isClearing, setIsClearing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );
    if (existingArticle) {
      return setArticle(existingArticle);
    }

    try {
      const { data, error } = await getSummary({ articleUrl: article.url });

      if (error) {
        console.error("API Error:", error);
        return;
      }

      if (!data?.summary) {
        alert("No summary was found for this article.");
        return;
      }

      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle({ url: "", summary: data.summary });
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    } catch (err) {
      console.error("Unexpected Error:", err);
    }
  };

  const handleCopyUrl = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopySummary = (summary) => {
    setCopied(summary);
    navigator.clipboard.writeText(summary);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClearHistory = () => {
    setIsModalOpen(true);
  };

  const confirmClearHistory = async () => {
    setIsClearing(true);
    setTimeout(() => {
      localStorage.removeItem("articles");
      setAllArticles([]);
      setArticle({ url: "", summary: "" });
      setIsClearing(false);
      setIsModalOpen(false);
    }, 1000);
  };
  return (
    <section className="mt-16 w-full max-w-xl mx-auto">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="url"
              placeholder="Paste the article link"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="input bg-white border-gray-300 w-full py-3 pl-10 pr-16 text-slate-950 placeholder-gray-400"
            />
            <FaLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <button
              type="submit"
              className="btn bg-slate-950 hover:bg-slate-800 text-white absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              ↵
            </button>
          </div>
        </form>

        <button
          className="btn bg-slate-950 hover:bg-slate-800 text-white gap-2 mt-4"
          onClick={handleClearHistory}
        >
          <FaTrash /> Clear History
        </button>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto mt-2">
          {[...allArticles].reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="card bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="card-body p-4 flex-row justify-between items-center">
                <p className="text-sm text-blue-600 hover:text-blue-800 flex-1 truncate">
                  {item.url}
                </p>
                <div
                  className="btn btn-ghost btn-sm btn-circle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyUrl(item.url);
                  }}
                >
                  {copied === item.url ? (
                    <FaClipboardCheck className="text-green-500" />
                  ) : (
                    <FaClipboard className="text-gray-600" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center pb-12">
        {isFetching ? (
          <span className="loading loading-spinner loading-lg text-slate-950"></span>
        ) : error ? (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error?.data?.message || "An error occurred."}</span>
          </div>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3 mt-4 w-full">
              <h2 className="text-xl font-bold text-slate-950">
                Article Summary
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="relative p-6">
                  <p className="text-sm text-slate-950">{article.summary}</p>
                  <button
                    className="btn btn-ghost btn-sm btn-circle absolute bottom-4 right-4"
                    onClick={() => handleCopySummary(article.summary)}
                  >
                    {copied === article.summary ? (
                      <FaClipboardCheck className="text-green-500" />
                    ) : (
                      <FaClipboard className="text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Enhanced DaisyUI Modal with Optimized Link Display */}
      {isModalOpen && (
        <dialog className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-slate-950">Clear History</h3>
            <div className="py-4">
              <p className="mb-4 text-slate-950">
                The following articles will be deleted:
              </p>
              <div className="max-h-48 overflow-y-auto space-y-1">
                {allArticles.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm text-blue-600 border-l-4 border-slate-950 pl-2"
                  >
                    {item.url}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-sm text-red-600">
                This action cannot be undone.
              </p>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-ghost hover:bg-slate-100"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-slate-950 hover:bg-slate-800 text-white"
                onClick={confirmClearHistory}
                disabled={isClearing}
              >
                {isClearing ? (
                  <>
                    <span className="loading loading-spinner loading-sm text-slate-900"></span>
                    <span className="text-gray-800">Clearing...</span>
                  </>
                ) : (
                  <>
                    <FaTrash />
                    Clear All
                  </>
                )}
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setIsModalOpen(false)}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
};

export default DemoSection;
