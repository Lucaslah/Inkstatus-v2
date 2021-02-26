const commandLineUsage = require('command-line-usage');
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
        header: 'InkStatus',
        content: 'A Nodejs Server Stats App'
    },
    {
        header: 'Commands',
        content: [
            '$ inkstatus serve'
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
                example: '$ inkstatus serve [port]  starts the server'
            },
            {
                desc: '2. Debug Mode ',
                example: '$ inkstatus server --debug'
            }
        ]
    },
    {
        content: 'GitHub: {underline https://github.com/lucaslah/inkstatus-v2}'
    }
];
module.exports = sections;
