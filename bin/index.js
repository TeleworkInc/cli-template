#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

/**
 * Imports from index.js.
 */
const { sayHello } = require('..');

/**
 * Obligatory h4x0r l33t intro.
 */
console.log(chalk.blueBright(
    figlet.textSync('cli-template'), 
));

/**
 * Define commands and assign actions to them.
 */
program
    .command('hello')
    .description('Say hello to the world.')
    .action(sayHello);

/**
 * Parse process arguments.
 */
program.parse(process.argv);