import React, { useState, useEffect } from 'react';

function HistoryPanel({ onLoadHistory }) {
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const savedHistory = localStorage.getItem('codeReviewHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('codeReviewHistory');
    setHistory([]);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center space-x-2"
      >
        <span>📜</span>
        <span>History ({history.length})</span>
      </button>
    );
  }

  return (
    <div className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-96 max-h-96 overflow-hidden z-50">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="font-semibold text-white">Analysis History</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="overflow-y-auto max-h-80">
        {history.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            No history yet. Analyze some code to get started!
          </div>
        ) : (
          <div className="divide-y divide-gray-700">
            {history.map((item, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-700 cursor-pointer transition"
                onClick={() => {
                  onLoadHistory(item);
                  setIsOpen(false);
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-blue-400">
                    {item.language}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(item.timestamp)}
                  </span>
                </div>
                <div className="text-sm text-gray-300 truncate">
                  {item.code.substring(0, 100)}...
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {history.length > 0 && (
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={clearHistory}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
}

export default HistoryPanel;
