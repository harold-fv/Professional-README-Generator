// Created a function that returns a license badge based on which license is passed in


function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU GPLv3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Unlicense') {
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else {
      return '';
    }
  }

//Created a function that returns the license link


function renderLicenseLink(license) {
    if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GNU GPLv3') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'Unlicense') {
      return 'http://unlicense.org/';
    } else {
      return '';
    }
  }



//Created a function that returns the license section of README


function renderLicenseSection(license) {
    if (license) {
      return `
  ## License
  This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.
  `;
    } else {
      return '';
    }
  }


//Created a function to generate markdown for README

function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact ${data.name} at ${data.email}. Visit ${data.github} to view more of their work.
  `;
  }
  
  module.exports = generateMarkdown;
