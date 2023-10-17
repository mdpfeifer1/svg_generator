const inquirer = require("inquirer");
const fs = require("fs");
// Pulling Deconstructed Class of Shapes from shapes.js
const {Triangle, Circle, Square} = require('../lib/shapes');

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter Text.",
    },
    {
      type: "input",
      name: "text color",
      message: "Select a Color.",
    },
    {
      type: "input",
      name: "shape",
      message: "What Shape Would You Like to Use?",
    },
    {
        type: "input",
        name: "shape color",
        message: "What Color Would You Like Your Shape?",
      },
  
  ])

//   Need to figure out how to pass colors and texts thru shapes
// Parse Data?