# Smart Code Reviewer - Usage Guide

## Quick Start

### 1. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The app will open in your browser at http://localhost:3000

### 2. Using the Application

#### Analyze Code in 3 Easy Steps:

1. **Enter Code**
   - Type or paste your code in the left panel
   - OR click "Upload File" to load from a file
   - OR click "Example" to load sample code

2. **Select Language**
   - Choose from C++, Python, Java, or JavaScript
   - The placeholder text will update accordingly

3. **Click "Analyze Code"**
   - Wait for the AI analysis (a few seconds)
   - View results in the tabbed panel on the right

#### Understanding the Results

**📖 Explanation Tab**
- Plain language explanation of what your code does
- Step-by-step logic breakdown
- Perfect for beginners learning how code works

**📊 Complexity Tab**
- Time complexity (Big-O notation)
- Space complexity analysis  
- Visual chart showing complexity level (1-5 scale)

**🔍 Issues Tab**
- List of inefficiencies detected
- Severity levels: Low, Medium, High
- Specific suggestions for improvement

**✨ Improved Code Tab**
- Optimized version of your code
- Syntax-highlighted display
- Inline comments explaining improvements

### 3. Advanced Features

#### Beginner vs Advanced Mode
- **Beginner Mode** (🎓): Simple explanations with analogies
- **Advanced Mode** (🚀): Technical details and performance metrics
- Toggle anytime in the top-right corner

#### History Panel
- Click "History" to view past analyses
- Stores last 10 reviews in your browser
- Click any history item to reload it
- Click "Clear History" to remove all saved analyses

#### File Upload
- Supports: `.cpp`, `.py`, `.java`, `.js` files
- Click "Upload File" and select from your computer
- Code will load into the editor automatically

### 4. Example Workflow

**Scenario: Learning about algorithm efficiency**

1. Select "Python" from language dropdown
2. Click "Example" to load bubble sort code
3. Switch to "Advanced" mode for detailed analysis
4. Click "Analyze Code"
5. Check the **Complexity Tab** to see it's O(n²)
6. Review the **Issues Tab** for inefficiencies
7. View the **Improved Code Tab** for optimized solution

### 5. Tips for Best Results

✅ **DO:**
- Use clear, well-formatted code
- Select the correct programming language
- Try both Beginner and Advanced modes to learn more
- Compare your code with the improved version

❌ **AVOID:**
- Submitting incomplete code snippets
- Exceeding 10,000 characters (use smaller functions)
- Analyzing very simple one-line expressions

### 6. Troubleshooting

**"Failed to analyze code" error:**
- Make sure the backend server is running
- Check that GEMINI_API_KEY is set in backend/.env
- Verify your API key is valid

**Code doesn't load:**
- Check that the file format is supported
- Ensure file size is reasonable (<10,000 characters)

**Analysis takes too long:**
- Check your internet connection
- The AI service may be experiencing high load
- Try again in a few moments

### 7. Learning Path

**For Beginners:**
1. Start with simple examples (click "Example")
2. Use Beginner mode
3. Focus on the Explanation and Logic tabs
4. Gradually move to the Issues tab

**For Advanced Users:**
1. Use Advanced mode
2. Focus on Complexity and Issues tabs
3. Compare your code with improved versions
4. Apply learnings to optimize your own code

## Need Help?

- Check the [README.md](README.md) for setup instructions
- Review error messages carefully - they guide you to solutions
- Make sure both frontend and backend servers are running
