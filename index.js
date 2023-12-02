// require libraries/directories here

const fs = require('fs');
const inquirer = require('inquirer');
// Need to pull shapes from shape classes in shapes.js
const {Triangle, Circle, Square} = require('./lib/shapes');

// create a function for user input (inquirer)
// 3-characters for logo
// text color
// shape choices as 'list' from inquirer
// shape color

async function getLogoCharacteristics() {
  const userDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'characters',
      message: 'Please enter 3 characters for your logo',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a text color (by name or hex #)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape for your logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter your shape color (by name or hex #)',
    },
])

// return the function
return getLogoCharacteristics;
}

// will need function to write logo file based on user input
// should probably add code so that it creates unique files each time

const svgContent = shape.getSVG();
fs.writeFile(`${characters}-logo.svg`, svgContent);
console.log("Your logo has been created as an .svg file!")

async function run() {
    const userDetails = await getLogoCharacteristics();
}

run();