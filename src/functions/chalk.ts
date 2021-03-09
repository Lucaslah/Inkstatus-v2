import { red } from "chalk"
import { yellow } from "chalk"
import { green } from "chalk"
import { bold } from "chalk"
import { underline } from "chalk"
import { blue } from "chalk"

import { port, appName } from "../config";

async function chalk_init(argv) {
console.log(`${blue.bold(`${appName}`)} is ${green.bold('Running')} at: ${underline.yellow.red.bold(`http://localhost:${argv.port}`)}`)
}

export default chalk_init;