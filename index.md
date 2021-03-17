<h1 align="center">
<img alt="img" src="2EA53BD8-7D9C-41CC-814C-3DE91F4F231B.png">
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

## InkStats CLI

InkStats CLI can be downloaded with npm or yarn

- npm: `npm i -g inkstats-v2`
- yarn `yarn add inkstats-v2`

### Basic Usage
- Basic Server: `inkstats-v2 serve`
- Chanage the Port: `inkstats-v2 serve --port=port`
- Debug Mode: `inkstats-v2 --debug`

## InkStats Module

InkStats Module can be installed with npm or yarn

- yarn: `yarn add inkstats-v2`
- npm: `npm i --save inkstats-v2`

### Example Usage
```javascript
const { InkStats } = require('inkstats-v2')

const server = new InkStats({
name: 'string', // Name if your InkStats Instance
port: number, // Port for InkStats to run on
message: 'string' // Message to be logged to your console when InkStats starts
})

server.start() // Starts the Server
server.kill() // Stops the Server
```

## Information that InkStats Shows
- Total Ram
- CPU Speed
- CPU Cores
- CPU Information
- Platform
- Computer Uptime
- More Coming soon

## Documentation
See the [Wiki](https://github.com/Lucaslah/InkStats-v2/wiki)
