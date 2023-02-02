class MarkDown {

    static renderLicenseBadge(license){
        const badges= {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
            isc: '[![License: ISC](img.shields.io/badge/License-ISC-blue.svg)](opensource.org/licenses/ISC)',
            gnugplv3: '[![License: LGPL v3](img.shields.io/badge/License-LGPL_v3-blue.svg)](www.gnu.org/licenses/lgpl-3.0)'
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            isc: '[ISC](https://choosealicense.com/licenses/isc/)',
            mit: '[MIT](https://choosealicense.com/licenses/mit/)',
            GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ''
        }
    }

    static generateReadme(answers){
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

 ## Description
${answers.description}

 ## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)} 
`
}
}

module.exports = MarkDown