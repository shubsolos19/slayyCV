export interface AnalysisResult {
  fileName: string;
  overallScore: number;
  atsCompatibility: number;
  keywordOptimization: number;
  formatting: number;
  contentQuality: number;
  recommendations: Array<{
    type: 'critical' | 'warning' | 'info' | 'tip';
    title: string;
    description: string;
    actionItems: string[];
  }>;
}

export const analyzeResume = async (file: File): Promise<AnalysisResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Extract file content (simplified - in real implementation, you'd use proper parsers)
  const content = await extractFileContent(file);
  
  // Analyze different aspects
  const atsCompatibility = analyzeATSCompatibility(content);
  const keywordOptimization = analyzeKeywordOptimization(content);
  const formatting = analyzeFormatting(content);
  const contentQuality = analyzeContentQuality(content);
  
  // Calculate overall score
  const overallScore = Math.round(
    (atsCompatibility + keywordOptimization + formatting + contentQuality) / 4
  );
  
  // Generate recommendations
  const recommendations = generateRecommendations(
    atsCompatibility,
    keywordOptimization,
    formatting,
    contentQuality,
    content
  );
  
  return {
    fileName: file.name,
    overallScore,
    atsCompatibility,
    keywordOptimization,
    formatting,
    contentQuality,
    recommendations
  };
};

const extractFileContent = async (file: File): Promise<string> => {
  // Simplified content extraction
  if (file.type === 'text/plain') {
    return await file.text();
  }
  
  // For PDF/DOC files, we'd use appropriate parsers
  // This is a simplified mock implementation
  return `Sample resume content with skills like JavaScript, React, Node.js, and experience in software development.
  
  EXPERIENCE
  Software Developer at TechCorp (2020-2023)
  - Developed web applications using modern frameworks
  - Collaborated with cross-functional teams
  - Implemented responsive designs
  
  SKILLS
  JavaScript, TypeScript, React, Node.js, Python, SQL, Git
  
  EDUCATION
  Bachelor of Science in Computer Science`;
};

const analyzeATSCompatibility = (content: string): number => {
  let score = 100;
  
  // Check for ATS-unfriendly elements
  if (content.includes('graphics') || content.includes('images')) score -= 15;
  if (content.includes('table') || content.includes('columns')) score -= 10;
  if (content.length < 300) score -= 20;
  
  // Check for proper sections
  const sections = ['experience', 'skills', 'education'];
  const foundSections = sections.filter(section => 
    content.toLowerCase().includes(section)
  );
  
  if (foundSections.length < sections.length) {
    score -= (sections.length - foundSections.length) * 10;
  }
  
  return Math.max(0, score);
};

const analyzeKeywordOptimization = (content: string): number => {
  const commonTechKeywords = [
    'javascript', 'react', 'node.js', 'python', 'sql', 'git', 'agile',
    'scrum', 'api', 'database', 'cloud', 'aws', 'docker', 'kubernetes'
  ];
  
  const contentLower = content.toLowerCase();
  const foundKeywords = commonTechKeywords.filter(keyword => 
    contentLower.includes(keyword)
  );
  
  // Score based on keyword density
  const keywordScore = Math.min(95, (foundKeywords.length / commonTechKeywords.length) * 100);
  
  return Math.round(keywordScore);
};

const analyzeFormatting = (content: string): number => {
  let score = 100;
  
  // Check for proper formatting indicators
  if (!content.includes('EXPERIENCE') && !content.includes('Experience')) score -= 20;
  if (!content.includes('EDUCATION') && !content.includes('Education')) score -= 15;
  if (!content.includes('SKILLS') && !content.includes('Skills')) score -= 15;
  
  // Check for consistent formatting
  const lines = content.split('\n');
  const emptyLines = lines.filter(line => line.trim() === '');
  
  if (emptyLines.length / lines.length > 0.3) score -= 10;
  
  return Math.max(0, score);
};

const analyzeContentQuality = (content: string): number => {
  let score = 100;
  
  // Check content length
  if (content.length < 500) score -= 20;
  if (content.length > 2000) score -= 10;
  
  // Check for action verbs
  const actionVerbs = ['developed', 'implemented', 'managed', 'led', 'created', 'designed'];
  const foundVerbs = actionVerbs.filter(verb => 
    content.toLowerCase().includes(verb)
  );
  
  if (foundVerbs.length < 3) score -= 15;
  
  // Check for quantifiable achievements
  const hasNumbers = /\d+/.test(content);
  if (!hasNumbers) score -= 10;
  
  return Math.max(0, score);
};

const generateRecommendations = (
  atsCompatibility: number,
  keywordOptimization: number,
  formatting: number,
  contentQuality: number,
  content: string
) => {
  const recommendations = [];
  
  if (atsCompatibility < 70) {
    recommendations.push({
      type: 'critical' as const,
      title: 'ATS Compatibility Issues',
      description: 'Your resume may not be properly parsed by Applicant Tracking Systems.',
      actionItems: [
        'Use a simple, clean format without graphics or complex layouts',
        'Ensure proper section headers (Experience, Education, Skills)',
        'Use standard fonts like Arial or Times New Roman',
        'Save as both PDF and Word formats'
      ]
    });
  }
  
  if (keywordOptimization < 60) {
    recommendations.push({
      type: 'warning' as const,
      title: 'Keyword Optimization',
      description: 'Your resume lacks relevant keywords that ATS systems look for.',
      actionItems: [
        'Include industry-specific keywords from job descriptions',
        'Add technical skills relevant to your field',
        'Use synonyms and variations of key terms',
        'Include both spelled-out and abbreviated versions (e.g., AI and Artificial Intelligence)'
      ]
    });
  }
  
  if (formatting < 70) {
    recommendations.push({
      type: 'warning' as const,
      title: 'Formatting Improvements',
      description: 'Your resume formatting could be more consistent and ATS-friendly.',
      actionItems: [
        'Use clear section headers',
        'Maintain consistent spacing and indentation',
        'Use bullet points for lists',
        'Avoid headers, footers, and text boxes'
      ]
    });
  }
  
  if (contentQuality < 60) {
    recommendations.push({
      type: 'info' as const,
      title: 'Content Quality Enhancement',
      description: 'Your resume content could be more impactful and quantified.',
      actionItems: [
        'Use strong action verbs to start bullet points',
        'Include quantifiable achievements (numbers, percentages)',
        'Focus on accomplishments rather than just duties',
        'Tailor content to specific job requirements'
      ]
    });
  }
  
  // Always include general tips
  recommendations.push({
    type: 'tip' as const,
    title: 'Best Practices',
    description: 'Follow these best practices to maximize your resume\'s effectiveness.',
    actionItems: [
      'Keep your resume to 1-2 pages maximum',
      'Use a professional email address',
      'Include relevant contact information',
      'Proofread carefully for spelling and grammar errors',
      'Update your resume for each job application'
    ]
  });
  
  return recommendations;
};