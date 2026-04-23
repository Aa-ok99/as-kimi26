function loadConfig() {
  return {
    logging: { level: 'info' },
    ollama: { baseURL: 'http://localhost:11434', timeout: 30000 }
  };
}
module.exports = { loadConfig };
