#!/usr/bin/env node
const { program } = require('commander');

/**
 * Define actions.
 */
const sayHello = () => console.log('Hello world!');

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

/**
 * Export anything that is needed for index.js.
 */ 
module.exports = sayHello;