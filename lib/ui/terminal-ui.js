const chalk = require('chalk');

function renderMenu(options) {
  console.log(chalk.blue('\n=== Kimi 2.6 Menu ==='));
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option.label}`);
  });
  console.log('0. Exit\n');
}

function renderStatus(status) {
  const icon = status === 'success' ? '✓' : '✗';
  const color = status === 'success' ? chalk.green : chalk.red;
  console.log(`${color(icon)} ${status.toUpperCase()}`);
}

module.exports = {
  renderMenu,
  renderStatus
};