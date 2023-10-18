const inquirer = require("inquirer");
const fs = require("fs");
// Pulling Deconstructed Class of Shapes from shapes.js
const { Triangle, Circle, Square } = require("./lib/shapes");

// Class with a child constructor using .this to target element

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter Text.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Select a Color.",
    },
    {
      type: "list",
      name: "shape",
      message: "What Shape Would You Like to Use?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What Color Would You Like Your Shape?",
    },
  ])
  .then((answers) => {
    let choice;
    if (answers.shape === "circle") {
      choice = new Circle(answers.title, answers.textColor, answers.shapeColor);
    } else if (answers.shape === "square") {
      choice = new Square(answers.title, answers.textColor, answers.shapeColor);
    } else {
      choice = new Triangle(
        answers.title,
        answers.textColor,
        answers.shapeColor
      );
    }

    fs.writeFile("logo.svg", choice.render(), function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
