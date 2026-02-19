import React, { useRef } from 'react';

function FileUpload({ onFileLoad }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileLoad(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".cpp,.py,.java,.js,.c,.h,.hpp,.txt"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center space-x-2"
      >
        <span>📁</span>
        <span>Upload File</span>
      </button>
    </div>
  );
}

export default FileUpload;
