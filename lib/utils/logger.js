const chalk = require('chalk');

function setupLogging(config = {}) {
  const level = config.level || 'info';
  
  const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3
  };
  
  const currentLevel = levels[level] !== undefined ? levels[level] : 2;
  
  const logger = {
    error: (...args) => log('error', chalk.red, ...args),
    warn: (...args) => log('warn', chalk.yellow, ...args),
    info: (...args) => log('info', chalk.cyan, ...args),
    debug: (...args) => log('debug', chalk.gray, ...args)
  };
  
  function log(levelName, colorFn, ...args) {
    if (levels[levelName] > currentLevel) return;
    
    const timestamp = new Date().toISOString();
    const message = colorFn(`[${levelName.toUpperCase()}] ${args.join(' ')}`);
    
    console.log(`[${timestamp}] ${message}`);
  }
  
  return logger;
}

module.exports = { setupLogging };