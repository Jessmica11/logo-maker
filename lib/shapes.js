
class Shape {
  constructor(characters, textColor, shapeColor) {
    this.characters = characters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    throw new Error('Not implemented');
  }

  getSVG() {
    return this.render();
  }
}

class Circle extends Shape {
  render() {
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <!-- Add your triangle SVG code here -->
      </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <!-- Add your square SVG code here -->
      </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
