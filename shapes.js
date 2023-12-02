// require the svg library for shapes
async function init() {
  const { createSVG, registerWindow } = await import('@svgdotjs/svg.js');
  const { window } = await import('svgdom');
  registerWindow(window, window.document);
  const SVG = createSVG();

// need a class for editable properties
class Shape {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // required render() method for each shape
    render(draw) {
        throw new Error('Not implemented');
    }

    // new method for getting SVG content
    // was getting additional errors because I forgot to write this part
    getSVG() {
    return this.render();
}
}

// make classes for each shape type: triangle, circle, square
// 'extends' adds onto 'shape' properties

// triangle class 
class Triangle extends Shape {
    render(draw) {
        const triangle = draw.polygon('150,50 250,150 50,150').fill(this.shapeColor);
        draw.text(this.text).move(125, 90).fill(this.textColor);
    }
}

// circle class
class Circle extends Shape {
    render(draw) {
        const circle = draw.circle(100).move(100, 50).fill(this.shapeColor);
        draw.text(this.text).move(125, 90).fill(this.textColor);
    }
}

// square class
class Square extends Shape {
    render(draw) {
        const square = draw.rect(100, 100).move(100, 50).fill(this.shapeColor);
        draw.text(this.text).move(125, 90).fill(this.textColor);
    }
}

// call them back
module.exports = { Circle, Triangle, Square };

}

init();