<h1 align="center">
<p>InkStats v2</p>
<img alt="npm" src="img/InkStats.png">
</h1>

<p align="center">
  A Nodejs Server Stats & Information app.
  </p>


<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/inkstats-v2">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/lucaslah/inkstats-v2">
  <img alt="NPM" src="https://img.shields.io/npm/l/inkstats-v2">
  <img alt="npm" src="https://img.shields.io/npm/dw/inkstats-v2">
  <img alt="depen" src="https://david-dm.org/Lucaslah/inkstats-v2.svg">
  </p>
  <p align="center">
  <img alt="npmpkg" src="https://nodei.co/npm/inkstats-v2.png" herf="https://npmjs.org/package/inkstats-v2">
  </p>

## Table of Contents
- [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installing Globlly](#installing-globlly)
  - [Installing as a Module](#installing-as-a-module)
  - [Information that InkStats Shows](#information-that-inkstats-shows)
- [Getting Started: CLI](#getting-started-cli)
- [Getting Started: Module](#getting-started-module)
- [Local Development](#local-development)
- [CLI Options](#cli-options)
- [Module Options](#module-options)
- [Module Commands](#module-commands)
- [Documentation](#documentation)
- [Contributing](#contributing)

### Requirements
- `npm` or `yarn`
- Nodejs

### Installing Globlly
- npm: `npm i -g inkstats-v2`
- yarn: `yarn add globle inkstats-v2`

### Installing as a Module
- npm: `npm i --save inkstats-v2`
- yarn: `yarn add inkstats-v2`

### Information that InkStats Shows
- Total Ram
- CPU Speed
- CPU Cores
- CPU Information
- Platform
- Computer Uptime
- More Coming soon

## Getting Started: CLI
1. Install InkStats v2 [See Installing Globlly](#installing-globlly)
2. In your Terminal run `inkstats-v2 serve` to start a basic InkStats Server
3. Read [CLI Options](#cli-options) for more info on the CLI


## Getting Started: Module
1. Install InkStats v2 (Module)
2. Make a New InkStats Instance in your nodejs project
```javascript
// InkStats Module Example

const { InkStats } = require('inkstats-v2') // Require InkStats

/**
 * Makes a New InkStats Instance
 */
const server = new InkStats({
    /**
     * The Port you want your InkStats Instance to run on
     * Not Required, Defaults to port 8080
     */
    port: 8080,
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     * Not Required, Defaults to Nothing (Nothing will be logged to your Console)
     * {port} will output will the port your InkStats Instance is running on
     */
    message: 'Hello {port}',
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     * Not Required, Defaults to InkStats
     */
    name: 'My Epic Name'
})

// Usage Examples

/**
 * Stops your InkStats Instance
 * Required to Start your InkStats Process
 */
server.start()

/**
 * Stops your InkStats Instance
 * Not Required, Killing the node process will also stop InkStats
 */
server.kill()
```
3. For More Examples Check the Examples Folder in the Repo
4. See all the Module Options [here](#module-options) & Module Commands [here](#module-commands)

## Local Development
1. Clone the Repo: `git clone https://github.com/Lucaslah/InkStats-v2.git`
2. Chnage to the Dir you cloned: `cd InkStats-v2`
3. Install Required Stuff: `yarn` or `npm install`
4. Start the app: `yarn start serve` or `npm start serve`

## CLI Options
| Flag     | Allies | Usage        | Description                                |   |
|----------|--------|--------------|--------------------------------------------|---|
| help     |        | --help       | Shows the Help  Menu                       |   |
| version  |        | --version    | Shows the InkStats version                 |   |
| debug    | -d     | --debug      | Runs the app in debug mode                 |   |
| no_color | -n     | --no_color   | Removes the Color from the CLI             |   |
| port     | -p     | serve --port | Changes the Port to run InkStats to run on |   |

## Module Options
| Option  | Usage           | Description                                                                       | Required |
|---------|-----------------|-----------------------------------------------------------------------------------|----------|
| port    | port: number    | The Port to Run InkStats On                                                       | n        |
| message | message: string | A Message to be logged to your Console when InkStats Starts                       | n        |
| name    | name: string    | Sets the Title of your InkStats Instance, It will show on your InkStats Home Page | n        |

## Module Commands
| Option | Usage            | Description                |
|--------|------------------|----------------------------|
| start  | .start() | Starts the InkStats Server |
| kill   | .kill()  | Stops the InkStats Server  |

## Documentation
See the [Wiki](https://github.com/Lucaslah/InkStats-v2/wiki)

## Contributing
[See Contributing.md](contributing.md)
