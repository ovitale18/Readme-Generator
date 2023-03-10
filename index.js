const inquirer = require('inquirer');
const fs = require('fs')
const MarkDown = require('./lib/ReadmeGen')

//APP QUESTIONS
const questions = [
    {
         type: 'input',
         name: 'title',
         message: 'Project title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Install instructions?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'For questions (github)?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUPLv3'], 
        filter(val) {
            return val.toLowerCase();
        }
    },
];

//run query function
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('READEME.md', mark, function(err){
            if(err){
                console.log('Could not save file', err)
            } else {
                console.log('Success: new README.md file generated inside the current folder')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
};

runQuery()

