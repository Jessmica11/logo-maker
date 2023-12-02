const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
  test('Triangle should render correctly with given color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,50 250,150 50,150" fill="blue" />');
  });

  
  });