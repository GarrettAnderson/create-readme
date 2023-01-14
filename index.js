const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'Project Name'
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'Project Description'
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'Installation Instructions'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'Contribution Guidelines'
    },
    {
        type: 'input',
        message: 'What are the instructions for testing?',
        name: 'Test Instructions'
    },
    {
        type: 'list',
        message: 'What is the project license?',
        name: 'License',
        choices: ['None', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
    }
]

