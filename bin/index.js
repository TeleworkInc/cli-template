#!/usr/bin/env node
const { program } = require('commander');

program
    .command('hello')
    .description('Say hello to the world.')
    .action(() => console.log('Hello world!'));

program.parse(process.argv);