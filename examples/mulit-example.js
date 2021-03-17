const { InkStats } = require('../dist/module') // Require InkStats

/**
 * Makes a New InkStats Instance
 */
const server1 = new InkStats({
    /**
     * The Port you want your InkStats Instance to run on
     * Not Required, Defaults to port 8080
     */
    port: 8080,
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     * Not Required, Defaults to Nothing (Nothing will be logged to your Console)
     */
    message: 'Hello {port} (InkStats Instance 1)',
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     * Not Required, Defaults to InkStats
     * {port} will output will the port your InkStats Instance is running on
     */
    name: 'InkStats Instance 1'
})

/**
 * Makes a New InkStats Instance
 */
const server2 = new InkStats({
    /**
     * The Port you want your InkStats Instance to run on
     * Not Required, Defaults to port 8080
     * For a second InkStats Instance, Make sure you pick a different port
     */
    port: 8082,
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     * Not Required, Defaults to Nothing (Nothing will be logged to your Console)
     */
    message: 'Hello {port} (InkStats Instance 2)',
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     * Not Required, Defaults to InkStats
     * {port} will output will the port your InkStats Instance is running on
     */
    name: 'InkStats Instance 2'
})

server1.start() // Starts Server 1
server2.start() // Starts Server 2

function kill1() {
    server1.kill() // Kills Server 1 
}

function kill2() {
    server2.kill() // Kills Server 2
}

setTimeout(kill1, 3000); // Kill your First InkStats Instance after 3000ms
setTimeout(kill2, 5000); // Kill your second InkStats Instance after 5000ms