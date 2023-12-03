// index.js
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer'); // require inquirer module

(async () => {
  const { prompt: inquirerPrompt } = require('inquirer');

  async function getLogoCharacteristics() {
    const userDetails = await inquirerPrompt([
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
        name: 'shapeType',
        message: 'Please choose a shape for your logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your shape color (by name or hex #)',
      },
    ]);

    return userDetails;
  }

  function generateSVG(userDetails) {
    let shapeType;
    switch (userDetails.shapeType) {
      case 'circle':
        shapeType = new Circle(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      case 'triangle':
        shapeType = new Triangle(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      case 'square':
        shapeType = new Square(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      default:
        throw new Error('Invalid shape');
    }

    const svgContent = shapeType.getSVG();
    fs.writeFileSync(`${userDetails.characters}-logo.svg`, svgContent);
    console.log('Your logo has been created as an .svg file!');
  }

  async function run() {
    const userDetails = await getLogoCharacteristics();
    generateSVG(userDetails);
  }

  run();
})();
