/**
 * Slightly stylized logging utils. 
 */
const blue = (...msgs) => chalk.blueBright(...msgs);

const log = (...msgs) => console.log(
    chalk.bgBlueBright(' MSG '),
    ...msgs,
    '\n',
);

const success = (...msgs) => console.log(
    chalk.bgGreen(' SUCCESS '),
    ...msgs,
    '\n',
);

const error = (...msgs) => console.log(
    chalk.bgRed(' ERROR '),
    ...msgs,
    '\n',
);

/**
 * Public functions.
 */
const sayHello = () => console.log('Hello world!');

/**
 * Specify exports for use in bin file and when
 * this package is `require`d.
 */
module.exports = {
    sayHello,
};