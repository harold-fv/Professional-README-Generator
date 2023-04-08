
// Created an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your project use?',
      choices: ['MIT', 'GPL', 'Apache', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

//Created a function to write README file

const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your ${fileName} file has been generated!`);
  });
}



//Created a function to initialize app

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {
  // Prompt the user for input using inquirer
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data)
  fs.writeFile('Generated-README-File/README.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
}

init();



