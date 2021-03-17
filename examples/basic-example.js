const { InkStats } = require('../dist/module') // Require InkStats

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
// server.kill()