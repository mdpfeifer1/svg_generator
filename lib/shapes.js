
class Shapes{
    constructor() {    
    }
}

 // Triangle (will inherit the methods from the "Shapes" class)
class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182"/>`
    }
}

// Square (will inherit the methods from the "Shapes" class)
class Square extends Shapes{
    render(){
       return `<rect x ="60" y="10" rx="10" ry="10" width="30" height="30"/>`
    }
}

// Circle (will inherit the methods from the "Shapes" class)
class Circle extends Shapes{
    render(){
    return `<circle cx="25" cy="75" r="20"/>`
} 
}

// 
module.exports = {Triangle, Circle, Square}