const path = require('path');
const fs = require('fs-extra');

function loadConfig() {
  const configPath = path.join(process.cwd(), '.as-kimi26rc');
  
  try {
    if (fs.existsSync(configPath)) {
      return fs.readJsonSync(configPath);
    }
  } catch (error) {
    console.warn('Failed to load config:', error.message);
  }
  
  // Default config
  return {
    name: 'as-kimi26',
    version: '1.0.0',
    logging: {
      level: 'info',
      format: 'json'
    },
    ollama: {
      baseURL: 'http://localhost:11434',
      timeout: 30000
    }
  };
}

module.exports = { loadConfig };