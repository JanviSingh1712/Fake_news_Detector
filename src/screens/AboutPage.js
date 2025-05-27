import React from "react";

function AboutPage() {
  const falseNewsExamples = [
    {
      title: "Aliens Landed in New York!",
      description:
        "Viral video claimed aliens landed in Times Square. Our model flagged it as fake based on source credibility and manipulation markers.",
    },
    {
      title: "Drinking bleach cures COVID-19",
      description:
        "Our system flagged this dangerous claim as false using factual cross-verification from medical authorities.",
    },
    {
      title: "Bollywood actor endorses banned medicine",
      description:
        "This image and claim were fabricated and spread via WhatsApp groups. Detected as fake via image forensics and text comparison.",
    },
  ];

  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold mb-6 text-center" },
      "About Our News Detector"
    ),

    React.createElement(
      "p",
      { className: "mb-6 text-gray-700 text-lg" },
      "Our AI-powered model detects fake news with over 99% accuracy by analyzing language patterns, source credibility, and user behavior trends."
    ),

    React.createElement(
      "h2",
      { className: "text-2xl font-semibold mb-4 mt-8" },
      "Examples of Detected Fake News"
    ),

    ...falseNewsExamples.map((news, idx) =>
      React.createElement(
        "div",
        {
          key: idx,
          className:
            "bg-white shadow-md p-4 mb-4 rounded border border-red-300",
        },
        React.createElement(
          "h3",
          { className: "text-xl font-bold text-red-600 mb-1" },
          news.title
        ),
        React.createElement(
          "p",
          { className: "text-gray-700" },
          news.description
        )
      )
    ),

    React.createElement(
      "footer",
      { className: "mt-12 pt-6 border-t border-gray-300 text-center" },
      React.createElement(
        "h3",
        { className: "text-lg font-semibold mb-2" },
        "Contact Us"
      ),
      React.createElement("p", null, "📧 Email: detectfake@newschecker.com"),
      React.createElement("p", null, "📞 Phone: +91 9876543210")
    )
  );
}

export default AboutPage;
