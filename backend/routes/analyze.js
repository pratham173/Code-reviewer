const express = require('express');
const router = express.Router();
const { analyzeCode } = require('../services/aiService');

router.post('/analyze', async (req, res) => {
  try {
    const { code, language, mode } = req.body;

    // Validation
    if (!code || !code.trim()) {
      return res.status(400).json({ 
        error: 'Code is required',
        message: 'Please provide code to analyze'
      });
    }

    if (!language) {
      return res.status(400).json({ 
        error: 'Language is required',
        message: 'Please select a programming language'
      });
    }

    // Check if code is too long (limit to 10000 characters)
    if (code.length > 10000) {
      return res.status(400).json({ 
        error: 'Code too long',
        message: 'Please limit code to 10000 characters or less'
      });
    }

    const analysis = await analyzeCode(code, language, mode || 'beginner');
    
    res.json({
      success: true,
      data: analysis,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Analysis Error:', error);
    
    // Handle specific error types
    if (error.message.includes('API key')) {
      return res.status(500).json({
        error: 'Configuration error',
        message: 'AI service is not properly configured. Please check the API key.'
      });
    }

    if (error.message.includes('quota') || error.message.includes('rate limit')) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.'
      });
    }

    res.status(500).json({
      error: 'Analysis failed',
      message: error.message || 'An error occurred while analyzing the code'
    });
  }
});

module.exports = router;
