// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// let badge = "${data.license}".replace(/ /g, "%20");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input your Proyect Title: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please input your Proyect Description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please input your Proyect Installation instuctions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please input your Proyect Usage description:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please select your Proyect License:',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU%20GPLv3', 'MIT License', 'ISC License', 'Open'],
        },
        {
            type: 'input',
            message: 'Please input your Proyect Contributing guidelines:',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please input your Proyect Tests instructions:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please input your Instructions for Proyect Questions:',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Please input your Github Profile Username for Proyect Questions:',
            name: 'questionsGit',
        },
        {
            type: 'input',
            message: 'Please input your Email Address for Proyect Questions:',
            name: 'questionsMail',
        },
    ])


    // TODO: Create a function to write README file
    // .then(function (eval) {
    //     let badge = `${eval.license}.replace(/ /g, "%20")`;
    //   })
    .then((data) =>
        fs.writeFile(`${data.title}_README.md`,
            `# ${data.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
------------------------------
## Description
    ${data.description}
## Installation
    ${data.installation}
## Usage
    ${data.usage}
## License
    ${data.license}
## Contributions
    ${data.contributions}
## Tests
    ${data.tests}
## Questions
    ${data.questions}
#### GitHub:
[${data.questionsGit}](https://github.com/${data.questionsGit})
    https://github.com/${data.questionsGit}
#### Email
Send questions to the project maintainer: [${data.questionsMail}](mailto:${data.questionsMail})
    ${data.questionsMail}`,
            (err) =>
                err ? console.error(err) : console.log('✔️✔️ Success!')
        ));

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
