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
        message: 'What are the instructions for usage?',
        name: 'Usage Instructions'
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
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'Github Username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email Address'
    }
]

// the markdown for the readme file

const createReadme = (answers) => 
`
# ${answers['Project Name']}
    
## Table of Contents

- [Description](#ProjectDescription)
- [Installation](#InstallationInstructions)
- [Usage](#UsageInstructions)
- [Contribution](#ContributionGuidelines)
- [Test Instruction](#TestInstructions)
- [License](#License)
- [Github Username](#GithubUsername)
- [Email Address](#EmailAddress)


## Project Description
${answers['Project Description']}

## Installation Instructions
${answers['Installation Instructions']}

## Usage Instructions
${answers['Usage Instructions']}

## Contribution Guidelines
${answers['Contribution Guidelines']}

## Test Instructions
${answers['Test Instructions']}

## License
${answers.License}

## Github Username
${answers['Github Username']}

## Email Address
${answers['Email Address']}

`


function promptQuestions() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        fs.writeFile('README.md', createReadme(data), () => {
            console.log('success')
        })
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    })
}

promptQuestions()
