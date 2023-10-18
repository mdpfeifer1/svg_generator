class Shapes {
  constructor(text, textColor, colorOfShape) {
    this.text = text;
    this.textColor = textColor;
    this.colorOfShape = colorOfShape;
  }
}



// Triangle (will inherit the methods from the "Shapes" class)
class Triangle extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${this.colorOfShape}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>
    `;
  }
}


// Square (will inherit the methods from the "Shapes" class)
class Square extends Shapes {
  render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x ="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.colorOfShape}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }
}

// Circle (will inherit the methods from the "Shapes" class)
class Circle extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="=${this.colorOfShape}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}


//
module.exports = { Triangle, Circle, Square };
