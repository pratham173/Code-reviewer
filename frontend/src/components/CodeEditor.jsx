import React from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor({ code, onChange, language }) {
  const languageMap = {
    'C++': 'cpp',
    'Python': 'python',
    'Java': 'java',
    'JavaScript': 'javascript'
  };

  return (
    <div className="h-full rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <Editor
        height="100%"
        language={languageMap[language] || 'javascript'}
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}

export default CodeEditor;
