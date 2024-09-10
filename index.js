import chalk from 'chalk';
import randomColor from 'randomcolor';

var color = randomColor();

console.log(chalk.hex(color)(color));
