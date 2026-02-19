import React from 'react';

function CodeEditor({ code, onChange, language }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="h-full rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
      <textarea
        value={code}
        onChange={handleChange}
        placeholder={`Enter your ${language} code here...`}
        className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          tabSize: 2,
          lineHeight: '1.5',
        }}
        spellCheck="false"
      />
    </div>
  );
}

export default CodeEditor;
