import React from 'react';

function ModeToggle({ mode, onChange }) {
  return (
    <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => onChange('beginner')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          mode === 'beginner'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        🎓 Beginner
      </button>
      <button
        onClick={() => onChange('advanced')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          mode === 'advanced'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        🚀 Advanced
      </button>
    </div>
  );
}

export default ModeToggle;
