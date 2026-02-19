const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeCode(code, language, mode = 'beginner') {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const modeContext = mode === 'beginner'
      ? 'Explain in simple terms with analogies, avoiding jargon. Use clear language suitable for beginners.'
      : 'Provide detailed technical analysis with performance metrics, edge cases, and advanced optimization techniques.';

    const prompt = `You are an expert code reviewer helping students learn. Analyze the following ${language} code and provide a structured educational review.

${modeContext}

Code to analyze:
\`\`\`${language.toLowerCase()}
${code}
\`\`\`

Please provide your analysis in the following JSON format (IMPORTANT: Return ONLY valid JSON, no markdown formatting):
{
  "explanation": "Plain language explanation of what the code does, step by step",
  "logicBreakdown": "Description of the algorithm or approach used",
  "timeComplexity": "Big-O notation with clear explanation of why",
  "spaceComplexity": "Memory usage explanation",
  "complexityLevel": "A number from 1-5 representing complexity (1=O(1), 2=O(log n), 3=O(n), 4=O(n log n), 5=O(n^2) or worse)",
  "inefficiencies": [
    {
      "line": "line number or 'general'",
      "issue": "description of the inefficiency",
      "severity": "low/medium/high"
    }
  ],
  "improvements": [
    "suggested improvement 1",
    "suggested improvement 2"
  ],
  "improvedCode": "Optimized rewrite of the code with inline comments explaining improvements"
}

Return ONLY the JSON object, no additional text or markdown formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Remove markdown code block formatting if present
    let jsonText = text.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.substring(7);
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.substring(3);
    }
    if (jsonText.endsWith('```')) {
      jsonText = jsonText.substring(0, jsonText.length - 3);
    }
    jsonText = jsonText.trim();

    const analysis = JSON.parse(jsonText);

    // Ensure all required fields exist
    return {
      explanation: analysis.explanation || 'No explanation provided',
      logicBreakdown: analysis.logicBreakdown || 'No logic breakdown provided',
      timeComplexity: analysis.timeComplexity || 'Not determined',
      spaceComplexity: analysis.spaceComplexity || 'Not determined',
      complexityLevel: analysis.complexityLevel || 3,
      inefficiencies: analysis.inefficiencies || [],
      improvements: analysis.improvements || [],
      improvedCode: analysis.improvedCode || code
    };
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error(`Failed to analyze code: ${error.message}`);
  }
}

module.exports = { analyzeCode };
