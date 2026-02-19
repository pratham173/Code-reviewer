import React from 'react';
import ReactMarkdown from 'react-markdown';

function ExplanationTab({ analysis }) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <span className="mr-2">💡</span>
          What Does This Code Do?
        </h3>
        <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
          <ReactMarkdown>{analysis.explanation}</ReactMarkdown>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <span className="mr-2">🧩</span>
          Logic Breakdown
        </h3>
        <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
          <ReactMarkdown>{analysis.logicBreakdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ExplanationTab;
