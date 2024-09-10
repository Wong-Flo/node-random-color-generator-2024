import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

//packages imported from npmjs
let hue = argv[2];
let luminosity = argv[3];
let color = randomColor({ hue: `${hue}`, luminosity: `${luminosity}` }); //a hex code for an attractive color

function colorSquare(color) {
  let wholeLine = chalk.hex(color)('#'.repeat(31)); // Whole line of #####
  let halfLine = chalk.hex(color)('#'.repeat(5)); // Line of ###
  let space = ' '.repeat(7); // Empty spaces

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
