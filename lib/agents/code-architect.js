const { generateProjectStructure } = require('../tools/file-manager');
const { analyzeCodebase } = require('../tools/code-analyzer');

class CodeArchitectAgent {
  constructor() {
    this.name = 'code-architect';
  }

  async execute(projectConfig) {
    console.log('🗂️  Planning project architecture...');
    
    // Generate project structure
    const structure = generateProjectStructure(projectConfig);
    
    // Analyze existing code if available
    if (projectConfig.analyzeExisting) {
      const analysis = await analyzeCodebase(projectConfig.sourcePath);
      console.log('📊 Code analysis complete:', analysis.summary);
    }
    
    return {
      status: 'success',
      structure,
      recommendations: this.generateRecommendations(projectConfig)
    };
  }

  generateRecommendations(config) {
    const recommendations = [];
    
    if (config.language === 'javascript' || config.language === 'typescript') {
      recommendations.push('Consider using TypeScript for better type safety');
      recommendations.push('Implement linting with ESLint');
    }
    
    if (config.hasTests !== false) {
      recommendations.push('Set up testing framework (Jest/Vitest)');
    }
    
    return recommendations;
  }
}

module.exports = CodeArchitectAgent;