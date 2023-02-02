class MarkDown {
    static generateReadme(answers){
        return `
        # ${answers.title}

        ## Table of Contents
        - [Project description](#Description)
        - [Usage](#Usage)
        - [Contributing](#Contributing)
        - [Installation](#Installation)
        - [Questions](#Questions)
        - [License](#License)

        `
    }
}

module.exports = Markdown