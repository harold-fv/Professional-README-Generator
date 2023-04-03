// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string



// TODO: Create a function to generate markdown for README

