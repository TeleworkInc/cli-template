const fs = require('fs');
const chalk = require('chalk');

/**
 * Slightly stylized logging utils. 
 */
const log = (msg) => console.log(
    chalk.bgBlueBright(' MSG '),
    msg
);

const success = (msg) => console.log(
   chalk.bgGreen(' SUCCESS '),
   msg
);

const error = (msg) => console.log(
   chalk.bgRed(' ERROR '),
   msg
);

/**
 * Define any core logic here.
 */
const sayHello = () => console.log('Hello world!');

/**
 * Specify exports for use in bin file and when
 * this package is `require`d.
 */
module.exports = {
    sayHello,
};