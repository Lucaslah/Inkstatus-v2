"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const appConfigName = config_1.appName.toLowerCase();
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
];
const sections = [
    {
        header: config_1.appName,
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
        content: `GitHub: {underline ${config_1.GitHubLink}}`
    }
];
exports.default = sections;
