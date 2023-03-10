const inquirer = require('inquirer')
const fs = require('fs')


let licenseType = ""
let licenseBadge = ""
let licenseExplained = ""

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
${renderLicenseBadge(answers.License)}

    
## Table of Contents

* [Description](#project-description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Contribution](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)


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
${licenseExplained}


## Questions

For questions you can find me on Github or via my email:

My Github profile is https://github.com/${answers['Github Username']}
My email address is: ${answers['Email Address']}

`




function promptQuestions() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        fs.writeFile('README.md', createReadme(data), () => {
            console.log('success')
            
            // depending on type of license chosen by user, that license badge image will render next to the project title
            // iterateLicenseData(data)


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

// depending on type of license chosen by user, that license badge image will render next to the project title
renderLicenseBadge = (data) => {
    licenseType = data
    // console.log(licenseType)

    
    if (licenseType === 'Mozilla Public License 2.0') {
        licenseBadge = `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
        // console.log(licenseBadge)
        return licenseBadge
    } else if (licenseType === 'MIT License') {
        licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        // console.log(licenseBadge)
        return licenseBadge
    } else if (licenseType === 'The Unlicense') {
        licenseBadge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
        // console.log(licenseBadge)
        return licenseBadge
    } else {
        licenseExplained = 'There is no license chosen for this project.'
        return 'There is no license chosen for this project.'
    }
}

promptQuestions()



