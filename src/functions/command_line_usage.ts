const commandLineUsage = require('command-line-usage')

import { appName, GitHubLink } from "../config";

const appConfigName = appName.toLowerCase()


const optionDefinitions = [
  {
    name: 'help',
    description: 'Displays the usage guide.',
    type: Boolean
  },
  {
    name: 'version',
    description: 'Show version number.',
    type: Boolean
  }, {
    name: 'debug',
    description: 'Run in debug mode.',
    type: Boolean
  }
]

const sections = [
  {
    header: appName,
    content: 'A Nodejs Server Stats App'
  },
  {
    header: 'Commands',
    content: [
        `$ ${appConfigName} serve`
      ]
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    header: 'Examples',
    content: [
      {
        desc: '1. Stats the HTTP Server ',
        example: `$ ${appConfigName} serve [port]  starts the server`
      },
      {
        desc: '2. Debug Mode ',
        example: `$ ${appConfigName} server --debug`
      }
    ]
  },
  {
    content: `GitHub: {underline ${GitHubLink}}`
  }
]

module.exports = sections