import React from 'react';

function IssuesTab({ analysis }) {
  const inefficiencies = analysis.inefficiencies || [];
  const improvements = analysis.improvements || [];

  return (
    <div className="space-y-6">
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">⚠️</span>
          Inefficiencies Detected
        </h3>
        {inefficiencies.length === 0 ? (
          <div className="text-green-400 flex items-center">
            <span className="mr-2">✅</span>
            No major inefficiencies detected! Your code looks good.
          </div>
        ) : (
          <div className="space-y-3">
            {inefficiencies.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  item.severity === 'high'
                    ? 'bg-red-900 bg-opacity-30 border-red-500'
                    : item.severity === 'medium'
                    ? 'bg-yellow-900 bg-opacity-30 border-yellow-500'
                    : 'bg-blue-900 bg-opacity-30 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase">
                    {item.line !== 'general' ? `Line ${item.line}` : 'General'}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.severity === 'high'
                        ? 'bg-red-500'
                        : item.severity === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    } text-white`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-300">{item.issue}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">💡</span>
          Suggested Improvements
        </h3>
        {improvements.length === 0 ? (
          <div className="text-gray-400">
            No specific improvements suggested at this time.
          </div>
        ) : (
          <ul className="space-y-3">
            {improvements.map((improvement, index) => (
              <li
                key={index}
                className="flex items-start bg-gray-800 p-4 rounded-lg"
              >
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-gray-300 flex-1">{improvement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default IssuesTab;
