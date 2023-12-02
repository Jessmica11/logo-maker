// require the svg library for shapes
const SVG = require('svg.js');

// need a class for editable properties
class Shape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters,
        this.textColor = textColor,
        this.shapeColor = shapeColor,
    }

// required render() method for each shape
    render() {
        throw new Error('Not implemented');
    }

}

// make classes for each shape type: triangle, circle, square
// 'extends' adds onto 'shape' properties

// triangle class 
class Triangle extends Shape {
    render() {
        const draw = SVG().size(300, 200);
        const triangle = draw.polygon('150,50 250,150 50,150').fill(this.shapeColor);
        draw.text(this.text).move(125, 90).fill(this.textColor);
        return draw.svg();
  }
}

// circle class
class Circle extends Shape {
  render() {
    const draw = SVG().size(300, 200);
    const circle = draw.circle(100).move(100, 50).fill(this.shapeColor);
    draw.text(this.text).move(125, 90).fill(this.textColor);
    return draw.svg();
  }
}

// square class
class Square extends Shape {
  render() {
    const draw = SVG().size(300, 200);
    const square = draw.rect(100, 100).move(100, 50).fill(this.shapeColor);
    draw.text(this.text).move(125, 90).fill(this.textColor);
    return draw.svg();
  }
}

// call them back
module.exports = { Circle, Triangle, Square };
