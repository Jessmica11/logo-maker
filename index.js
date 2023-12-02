// Set up virtual DOM with svgdom using dynamic import
async function start() {
  const { createSVGWindow } = await import('svgdom');
  const window = createSVGWindow();
  const document = window.document;
  global.document = document;

  // Replaced the require statement with dynamic import since I kept getting errors
  const fs = require('fs');

  // Use dynamic import for inquirer
  const inquirer = await import('inquirer');

  const { Circle, Triangle, Square } = await import('./shapes');


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
    ]);

    // return the function
    return userDetails;
  }

  // will need function to write logo file based on user input

  function generateSVG(userDetails) {
    let shape;
    switch (userDetails.shape) {
      case 'circle':
        shape = new Circle(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      case 'square':
        shape = new Square(userDetails.characters, userDetails.textColor, userDetails.shapeColor);
        break;
      // included an error message here just in case
      default:
        throw new Error('Invalid shape');
    }

    // should probably add code so that it creates unique files each time
    const svgContent = shape.getSVG();
    fs.writeFileSync(`${userDetails.characters}-logo.svg`, svgContent);
    console.log('Your logo has been created as an .svg file!');
  }

  // to run everything
  async function run() {
    const userDetails = await getLogoCharacteristics();
    generateSVG(userDetails);
  }

  run();
}

// Call the asynchronous function immediately
start();
