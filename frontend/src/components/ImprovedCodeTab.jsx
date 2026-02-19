import React from 'react';
import Editor from '@monaco-editor/react';

function ImprovedCodeTab({ analysis }) {
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
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700" style={{ height: '500px' }}>
        <Editor
          height="100%"
          language="javascript"
          value={analysis.improvedCode || '// No improved code available'}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}

export default ImprovedCodeTab;
