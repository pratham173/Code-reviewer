import React from 'react';

function LanguageSelector({ language, onChange }) {
  const languages = ['C++', 'Python', 'Java', 'JavaScript'];

  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-300 font-medium">Language:</label>
      <select
        value={language}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700 transition"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
