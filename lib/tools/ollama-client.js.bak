const fetch = require('node-fetch');

class OllamaClient {
  constructor(config = {}) {
    this.baseURL = config.baseURL || 'http://localhost:11434';
    this.timeout = config.timeout || 30000;
  }

  async generate(prompt, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: options.model || 'llama2',
          prompt,
          stream: options.stream || false
        })
      });
      
      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.warn('Ollama client error:', error.message);
      throw error;
    }
  }
}

let instance = null;

function initializeOllamaClient(config) {
  if (!instance) {
    instance = new OllamaClient(config);
  }
  return instance;
}

module.exports = {
  initializeOllamaClient,
  OllamaClient
};