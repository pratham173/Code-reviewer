import React, { useState } from 'react';
import ExplanationTab from './ExplanationTab';
import ComplexityTab from './ComplexityTab';
import IssuesTab from './IssuesTab';
import ImprovedCodeTab from './ImprovedCodeTab';

function AnalysisPanel({ analysis, loading, language }) {
  const [activeTab, setActiveTab] = useState('explanation');

  const tabs = [
    { id: 'explanation', name: 'Explanation', icon: '📖' },
    { id: 'complexity', name: 'Complexity', icon: '📊' },
    { id: 'issues', name: 'Issues', icon: '🔍' },
    { id: 'improved', name: 'Improved Code', icon: '✨' },
  ];

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Analyzing your code...</p>
          <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 h-full flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Analysis Yet</h3>
          <p className="text-gray-400">
            Paste your code on the left and click "Analyze Code" to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition ${
              activeTab === tab.id
                ? 'bg-gray-700 text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-750'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'explanation' && <ExplanationTab analysis={analysis} />}
        {activeTab === 'complexity' && <ComplexityTab analysis={analysis} />}
        {activeTab === 'issues' && <IssuesTab analysis={analysis} />}
        {activeTab === 'improved' && <ImprovedCodeTab analysis={analysis} language={language} />}
      </div>
    </div>
  );
}

export default AnalysisPanel;
