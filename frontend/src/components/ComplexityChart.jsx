import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

function ComplexityChart({ level }) {
  const complexityLevels = [
    { name: 'O(1)', value: level >= 1 ? 100 : 0, color: '#10b981' },
    { name: 'O(log n)', value: level >= 2 ? 100 : 0, color: '#3b82f6' },
    { name: 'O(n)', value: level >= 3 ? 100 : 0, color: '#f59e0b' },
    { name: 'O(n log n)', value: level >= 4 ? 100 : 0, color: '#ef4444' },
    { name: 'O(n²)+', value: level >= 5 ? 100 : 0, color: '#dc2626' },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={complexityLevels}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#fff',
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {complexityLevels.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">
          Your code's complexity level: <span className="font-bold text-white">{level}/5</span>
        </p>
      </div>
    </div>
  );
}

export default ComplexityChart;
