const inquirer = require('inquirer');

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
async function runQuery() {
    return inquirer.createPromptModule(question)
    .then((answers)=>{
        console.log(answers)
        return answers
    })
}

