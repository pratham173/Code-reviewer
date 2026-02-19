# Smart Code Reviewer for Students 🤖

An AI-powered code analysis tool designed to help students learn better coding practices. This full-stack web application uses Google's Gemini AI to provide detailed, educational feedback on code snippets in multiple programming languages.

![Smart Code Reviewer](https://img.shields.io/badge/React-18.x-blue) ![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)

## ✨ Features

### 📝 Code Input Interface
- **Monaco Editor** with syntax highlighting for better code visualization
- Support for **C++, Python, Java, and JavaScript**
- **File upload** functionality (`.cpp`, `.py`, `.java`, `.js`)
- **Example code** snippets for quick testing
- Real-time code editing with IntelliSense

### 🧠 AI-Powered Analysis
The app provides comprehensive code reviews including:
- **Plain Language Explanation**: Step-by-step breakdown of what the code does
- **Logic Breakdown**: Analysis of the algorithm and approach used
- **Time & Space Complexity**: Big-O notation with clear explanations
- **Visual Complexity Chart**: Interactive visualization of complexity levels
- **Inefficiency Detection**: Identifies performance bottlenecks with severity levels
- **Improvement Suggestions**: Actionable recommendations for better code
- **Optimized Code**: Rewritten version with improvements and inline comments

### 🎓 Educational Features
- **Beginner/Advanced Modes**: Adapts explanations based on skill level
  - Beginner: Simple language, analogies, minimal jargon
  - Advanced: Technical details, performance metrics, edge cases
- **History Panel**: Stores last 10 analyses in browser localStorage
- **Interactive UI**: Tabbed interface for organized information display

### 🎨 Modern Design
- Clean, minimal interface with Tailwind CSS
- Dark theme optimized for coding
- Responsive layout for various screen sizes
- Smooth animations and transitions
- Loading states and error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Monaco Editor** - Code editor component
- **Recharts** - Complexity visualization
- **React Markdown** - Formatted AI responses
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **Google Gemini AI** - AI analysis engine
- **CORS** - Cross-origin support
- **dotenv** - Environment configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/pratham173/Code-reviewer.git
cd Code-reviewer
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and add your Gemini API key
# GEMINI_API_KEY=your_actual_api_key_here
# PORT=5000

# Start the backend server
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## 🔑 Environment Variables

### Backend (.env)
```
GEMINI_API_KEY=your_google_gemini_api_key
PORT=5000
```

### Frontend (Optional)
Create a `.env` file in the frontend directory if you need to change the API URL:
```
REACT_APP_API_URL=http://localhost:5000
```

## 📖 Usage

1. **Select Language**: Choose from C++, Python, Java, or JavaScript
2. **Write or Upload Code**: 
   - Type directly in the Monaco Editor
   - Upload a code file
   - Load an example snippet
3. **Choose Mode**: Select Beginner or Advanced mode
4. **Analyze**: Click "Analyze Code" button
5. **Review Results**: Explore the tabbed analysis panel:
   - **Explanation**: Understand what your code does
   - **Complexity**: See time/space complexity with visualizations
   - **Issues**: Review detected inefficiencies
   - **Improved Code**: Check the optimized version

## 🧪 Available Scripts

### Backend
```bash
npm start       # Start the production server
npm run dev     # Start development server
```

### Frontend
```bash
npm start       # Start development server (port 3000)
npm run build   # Build for production
npm test        # Run tests
npm run eject   # Eject from Create React App (one-way operation)
```

## 📁 Project Structure

```
Code-reviewer/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── LanguageSelector.jsx
│   │   │   ├── AnalysisPanel.jsx
│   │   │   ├── ExplanationTab.jsx
│   │   │   ├── ComplexityTab.jsx
│   │   │   ├── IssuesTab.jsx
│   │   │   ├── ImprovedCodeTab.jsx
│   │   │   ├── ModeToggle.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   ├── HistoryPanel.jsx
│   │   │   └── ComplexityChart.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── analyze.js
│   ├── services/
│   │   └── aiService.js
│   ├── .env.example
│   └── package.json
├── README.md
└── .gitignore
```

## 🔧 API Endpoints

### POST /api/analyze
Analyzes the provided code and returns structured feedback.

**Request Body:**
```json
{
  "code": "your code here",
  "language": "JavaScript",
  "mode": "beginner"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "explanation": "...",
    "logicBreakdown": "...",
    "timeComplexity": "...",
    "spaceComplexity": "...",
    "complexityLevel": 3,
    "inefficiencies": [...],
    "improvements": [...],
    "improvedCode": "..."
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /health
Health check endpoint.

## ⚠️ Limitations

- Code submissions are limited to 10,000 characters
- API rate limits apply based on your Gemini API tier
- Analysis quality depends on code clarity and completeness
- History is stored locally (browser localStorage) - limited to 10 items

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Google Gemini AI for powerful code analysis capabilities
- Monaco Editor for the excellent code editing experience
- The React and Node.js communities

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/pratham173/Code-reviewer/issues) page
2. Create a new issue with detailed information
3. Make sure your API key is correctly configured

---

**Built with ❤️ for students learning to code**