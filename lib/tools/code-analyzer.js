const { glob } = require('glob');

async function analyzeCodebase(basePath) {
  try {
    const files = await glob('**/*.{js,ts,jsx,tsx,py}', {
      cwd: basePath,
      absolute: true
    });
    
    const analysis = {
      summary: 'Codebase analyzed',
      totalFiles: files.length,
      fileTypes: analyzeFileTypes(files)
    };
    
    return analysis;
  } catch (error) {
    console.warn('Code analysis failed:', error.message);
    return { summary: 'Analysis failed', error: error.message };
  }
}

function analyzeFileTypes(files) {
  const types = {};
  files.forEach(file => {
    const ext = file.split('.').pop();
    types[ext] = (types[ext] || 0) + 1;
  });
  return types;
}

module.exports = { analyzeCodebase };