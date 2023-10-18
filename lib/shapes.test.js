// Pulling Deconstructed Class of Shapes from shapes.js
const { Triangle, Circle, Square } = require('../lib/shapes');

// Triangle
describe('Shape', () => {
    test('Triangle', () => {
        const shape = new Triangle();
        shape.colorOfShape("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    }); 


// Circle
// describe('Circle', () => {
    test('Circle', () => {
        const shape = new Circle();
        shape.shapeColor("green");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');
});
// });

// Square
// describe('Square', () => {
    test('appears', () => {
        const shape = new Square();
        shape.shapeColor("red");
        expect(shape.render()).toEqual('<rect x ="60" y="10" rx="10" ry="10" width="30" height="30" fill="red" />');
});
});
// }); 
