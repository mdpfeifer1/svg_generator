const inquirer = require("inquirer");
const fs = require("fs");

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
    