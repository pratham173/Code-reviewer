import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ImprovedCodeTab({ analysis, language }) {
  const languageMap = {
    'C++': 'cpp',
    'Python': 'python',
    'Java': 'java',
    'JavaScript': 'javascript'
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">✨</span>
          Optimized Version
        </h3>
        <p className="text-gray-300 mb-4">
          Here's an improved version of your code with better performance and cleaner structure:
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <SyntaxHighlighter
          language={languageMap[language] || 'javascript'}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '14px',
            maxHeight: '500px',
            overflowY: 'auto',
          }}
          showLineNumbers={true}
        >
          {analysis.improvedCode || '// No improved code available'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default ImprovedCodeTab;
