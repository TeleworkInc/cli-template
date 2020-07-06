#!/usr/bin/env node
const { program } = require('commander');

/**
 * Imports from index.js.
 */
const { sayHello } = require('..');

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