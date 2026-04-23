import chalk from 'chalk';
import ora from 'ora';
import { exec } from 'child_process';

// จำลองการโหลด Agents จากโครงสร้างของคุณ
const agents = [
  './lib/agents/code-architect.js',
  './lib/agents/data-guardian.js',
  './lib/agents/performance-engineer.js',
  './lib/agents/security-auditor.js'
];

async function runTest() {
  console.log(chalk.bold.cyan('\n🚀 Kimi 2.6 Agent System Check\n'));

  // 1. ตรวจสอบไฟล์ Agent
  for (const agent of agents) {
    const spinner = ora(`Checking ${agent}...`).start();
    try {
      // ทดสอบว่าไฟล์มีอยู่จริงและโหลดได้
      await import(agent);
      spinner.succeed(chalk.green(` ${agent} is READY`));
    } catch (err) {
      spinner.fail(chalk.red(` ${agent} has ERROR: ${err.message}`));
    }
  }

  // 2. ตรวจสอบ Ollama Service
  const ollamaSpinner = ora('Connecting to Ollama server...').start();
  exec('curl http://localhost:11434/api/tags', (err) => {
    if (err) {
      ollamaSpinner.warn(chalk.yellow(' Ollama is NOT RUNNING (Start it with "ollama serve")'));
    } else {
      ollamaSpinner.succeed(chalk.green(' Ollama Server is ONLINE'));
    }
  });
}

runTest();
