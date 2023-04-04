function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Description
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ${data.license}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    GitHub: [${data.github}](https://github.com/${data.github})<br>
    Email: [${data.email}](mailto:${data.email})
    `;
  }
  