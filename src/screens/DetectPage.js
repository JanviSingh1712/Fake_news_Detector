import React from "react";
import { useLocation } from "react-router-dom";

function DetectPage() {
  const location = useLocation();
  const newsText = location.state?.newsText || "No news provided.";

  // Placeholder detection logic – replace with real API call or logic
  const isFake = newsText.length % 2 === 0; // Dummy logic

  const resultText = isFake
    ? "⚠️ Fake News Detected"
    : "✅ This News Seems Legitimate";
  const resultColor = isFake ? "text-red-600" : "text-green-600";

  return React.createElement(
    "div",
    {
      className:
        "flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4",
    },

    React.createElement(
      "h2",
      { className: "text-2xl font-bold mb-4 text-gray-800" },
      "Detection Result"
    ),

    React.createElement(
      "div",
      {
        className:
          "w-full max-w-2xl bg-white border border-gray-300 p-4 rounded-md shadow mb-6",
      },
      React.createElement("p", { className: "text-gray-700" }, newsText)
    ),

    React.createElement(
      "div",
      { className: `text-xl font-semibold ${resultColor}` },
      resultText
    )
  );
}

export default DetectPage;
