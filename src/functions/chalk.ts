import { blue } from "chalk"
import { red } from "chalk"
import { yellow } from "chalk"
import { green } from "chalk"
import { bold } from "chalk"
import { underline } from "chalk"

import { port, appName } from "../config";

const appport = process.env.PORT || port || 8080

async function chalk_init(argv) {
console.log(`${blue.bold(`${appName}`)} is ${green.bold('Running')} at: ${underline.yellow.red.bold(`http://localhost:${argv.port}`)}`)
}

module.exports = chalk_init;