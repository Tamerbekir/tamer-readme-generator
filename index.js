// TODO: Include packages needed for this application ✅

const inquirer = require('inquirer')
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input ✅


const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: (data) => {
            if (data === '') {
                return 'Please enter a valid project name.';
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and the how of your project.',
        validate: (data) => {
            if (data === '') {
                return 'Please enter a valid description.'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there steps required to install your project? If not applicable, please type "N/A".',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left blank.';
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and for use. If not applicable, please type "N/A".',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any collaborators? If so, include links to their GitHub profiles (or any other links to your source). If not applicable, please type "N/A".',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use? for your project?',
        choices: ['Apache License 2.0', 'GNU General Public License v.3.0', 'MIT License', 'BSD 2-Clause "Simplifed" License', 'BSD 3-Clause "new" or "Revised" License, Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipes Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.1', 'GNY Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'Unlicensed'],
        validate: () => {
            return true
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here. If not applicable, please type "N/A".',
        validate: (answer) => {
            if (answer === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Is this project open for contributions? If so, put them here. If not applicable, put N/A.',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'Tests',
        name: 'tests',
        message: 'Are there are tests for your project? If not applicable, please type "N/A".',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'Questions',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
    {
        type: 'Questions',
        name: 'email',
        message: 'What is your email address?',
        validate: (data) => {
            if (data === '') {
                return 'Cannot be left bank.';
            }
            return true
        }
    },
]


// TODO: Create a function to write README file

inquirer.prompt(questions)
    .then((data) => {
        const readMeFile = generateMarkdown(data);
        fs.writeFile('README.md', readMeFile, (err) => {
            err ? console.error(err) : console.log("README.md has been created.")
        })
    })


