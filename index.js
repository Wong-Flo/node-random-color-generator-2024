import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// packages imported from npmjs
const hue = argv[2];
const luminosity = argv[3];
const color = randomColor({ hue: `${hue}`, luminosity: `${luminosity}` }); // a hex code for an attractive color

function colorSquare() {
  const wholeLine = chalk.hex(color)('#'.repeat(31)); // Whole line of #####
  const halfLine = chalk.hex(color)('#'.repeat(5)); // Line of ###
  const space = ' '.repeat(7); // Empty spaces

  console.log(`
    ${wholeLine}
    ${wholeLine}
    ${wholeLine}
    ${halfLine}${space}${space}${space}${halfLine}
    ${halfLine}${space}${chalk.hex(color)(color)}${space}${halfLine}
    ${halfLine}${space}${space}${space}${halfLine}
    ${wholeLine}
    ${wholeLine}
    ${wholeLine}
    `); // printing out square with lines, spaces and color code
}
colorSquare(color);
