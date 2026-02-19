import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';
import AnalysisPanel from './components/AnalysisPanel';
import ModeToggle from './components/ModeToggle';
import FileUpload from './components/FileUpload';
import HistoryPanel from './components/HistoryPanel';
import './App.css';

// Example code snippets
const exampleCode = {
  'C++': `#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    int n = 10;
    cout << "Fibonacci(" << n << ") = " << fibonacci(n) << endl;
    return 0;
}`,
  'Python': `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers)
print("Sorted array:", sorted_numbers)`,
  'Java': `public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}`,
  'JavaScript': `function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

const numbers = [1, 2, 3, 2, 4, 5, 3, 6];
console.log(findDuplicates(numbers));`,
};

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [mode, setMode] = useState('beginner');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError('Please enter some code to analyze');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/api/analyze`, {
        code,
        language,
        mode,
      });

      setAnalysis(response.data.data);

      // Save to history
      const historyItem = {
        code,
        language,
        mode,
        analysis: response.data.data,
        timestamp: new Date().toISOString(),
      };

      const savedHistory = localStorage.getItem('codeReviewHistory');
      const history = savedHistory ? JSON.parse(savedHistory) : [];
      history.unshift(historyItem);

      // Keep only last 10 items
      if (history.length > 10) {
        history.pop();
      }

      localStorage.setItem('codeReviewHistory', JSON.stringify(history));
    } catch (err) {
      console.error('Analysis error:', err);
      setError(
        err.response?.data?.message ||
          err.message ||
          'Failed to analyze code. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoadExample = () => {
    setCode(exampleCode[language] || '');
  };

  const handleFileLoad = (content) => {
    setCode(content);
  };

  const handleLoadHistory = (item) => {
    setCode(item.code);
    setLanguage(item.language);
    setMode(item.mode);
    setAnalysis(item.analysis);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <span className="mr-3 text-4xl">🤖</span>
                Smart Code Reviewer
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                AI-powered code analysis for students
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <ModeToggle mode={mode} onChange={setMode} />
              <HistoryPanel onLoadHistory={handleLoadHistory} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        {error && (
          <div className="mb-4 bg-red-900 bg-opacity-50 border border-red-500 text-red-200 px-4 py-3 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2">⚠️</span>
              {error}
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-300 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ height: 'calc(100vh - 200px)' }}>
          {/* Left Panel - Code Input */}
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <LanguageSelector language={language} onChange={setLanguage} />
                <div className="flex items-center space-x-2">
                  <FileUpload onFileLoad={handleFileLoad} />
                  <button
                    onClick={handleLoadExample}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center space-x-2"
                  >
                    <span>📝</span>
                    <span>Example</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <CodeEditor code={code} onChange={setCode} language={language} />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading || !code.trim()}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                loading || !code.trim()
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyzing...
                </span>
              ) : (
                '🚀 Analyze Code'
              )}
            </button>
          </div>

          {/* Right Panel - Analysis */}
          <div>
            <AnalysisPanel analysis={analysis} loading={loading} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-8">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400 text-sm">
          <p>
            Built with ❤️ using React, Tailwind CSS, and Google Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
