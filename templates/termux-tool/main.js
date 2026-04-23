#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

program
  .name('tool')
  .description('Termux tool template');

program
  .command('run')
  .description('Execute tool')
  .action(() => {
    console.log('Tool executed!');
  });

program.parse();