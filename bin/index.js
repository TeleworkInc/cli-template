#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

/**
 * Import public commands.
 */
const commands = require('../lib/commands');

/**
 * Obligatory h4x0r l33t intro.
 */
console.log(chalk.blueBright(
    figlet.textSync('cli-template'), '\n'
));

/**
 * Define commands and assign actions to them.
 */
program
    .command('hello')
    .description('Say hello to the world.')
    .action(commands.sayHello);

/**
 * Parse process arguments.
 */
program.parse(process.argv);