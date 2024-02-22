// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// switch = if, case = else if, return = do this default = else
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'GNU General Public License v.3.0':
      return `![License: GPL-v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'MIT License':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'BSD 2-Clause "Simplifed" License':
      return `![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    case 'Boost Software License 1.0':
      return `![License: Boost-1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
    case 'Eclipes Public License 2.0':
      return `![License: EPL-2.0](https://img.shields.io/badge/License-EPL_2.0-red.svg)`;
    case 'GNU Affero General Public License v3.0':
      return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
    case 'GNU General Public License v2.1':
      return `![License: GPL-v2.1](https://img.shields.io/badge/License-GPL_v2.1-blue.svg)`;
    case 'GNY Lesser General Public License v2.1':
      return `![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)`;
    case 'Mozilla Public License 2.0':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case 'Unlicensed':
      return `![License: Unlicensed](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `This project is covered under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) License`;
    case 'GNU General Public License v.3.0':
      return `This project is covered under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0) License`
    case 'MIT License':
      return `This project is covered under the [MIT License](https://opensource.org/blog/license/mit) License`;
    case 'BSD 2-Clause "Simplifed" License':
      return `This project is covered under the [BSD 2-Clause](https://opensource.org/blog/license/bsd-2-clause) License`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `This project is covered under the [BSD 3-Clause](https://spdx.org/licenses/BSD-3-Clause.html License`;
    case 'Boost Software License 1.0':
      return `This project is covered under the [Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt) License`;
    case 'Creative Commons Zero v1.0 Universal':
      return `This project is covered under the [Creative Commons Zero v1.0](http://creativecommons.org/publicdomain/zero/1.0/) License`;
    case 'Eclipes Public License 2.0':
      return `This project is covered under the [Eclipes Public License 2.0](https://www.eclipse.org/legal/epl-2.0/) `;
    case 'GNU Affero General Public License v3.0':
      return `This project is covered under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0) `;
    case 'GNU General Public License v2.1':
      return `This project is covered under the [GNU General Public License v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
    case 'GNY Lesser General Public License v2.1':
      return `This project is covered under the [GNY Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-2.1)`;
    case 'Mozilla Public License 2.0':
      return `This project is covered under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
    case 'Unlicensed':
      return `[Unlicensed](http://unlicense.org/)- This project is not covered by any license and is available to the public.`;
    default:
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description 
${data.description}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Features
${data.features}

## Contribute
${data.contribute}

## Tests
${data.tests}

## Questions
<a href="https://github.com/${data.github}">My GitHub</a>
<br>
If you have any questions or inquries, feel free to contact me using my <a href="mailto:${data.email}">email</a>

## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}
`
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink }


