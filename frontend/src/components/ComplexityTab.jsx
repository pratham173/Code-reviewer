import React from 'react';
import ComplexityChart from './ComplexityChart';

function ComplexityTab({ analysis }) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">⏱️</span>
          Time Complexity
        </h3>
        <div className="text-gray-300 leading-relaxed mb-4">
          {analysis.timeComplexity}
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">💾</span>
          Space Complexity
        </h3>
        <div className="text-gray-300 leading-relaxed mb-4">
          {analysis.spaceComplexity}
        </div>
      </div>

      {analysis.complexityLevel && (
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">📊</span>
            Complexity Visualization
          </h3>
          <ComplexityChart level={analysis.complexityLevel} />
        </div>
      )}
    </div>
  );
}

export default ComplexityTab;
