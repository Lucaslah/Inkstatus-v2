import app from "./app"
import { appName } from "./config"

interface Options {
    port?: number
    name?: string
    message?: string
}

export class InkStats {
    /**
     * The Port for your InkStats Instance to Run On
     */
    private port: number | undefined = 8080
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     */
    private message: string | undefined = undefined
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     */
    public name: string | undefined = appName

    constructor(options: Options) {
        this.port = options.port;
        this.message = options.message;
        this.name = options.name;
    }

    private checks = () => {

        if (!this.port) this.port = 8080

        if (this.message) {
            var port = this.port
            var str = this.message
            str = str.replace('{port}', `${port}`)
            this.message = str
        }

        if (!this.name) {
            this.name = appName
        }
        // @ts-ignore
        global.nametitle = this.name

    }

    private expressServer() {
        // @ts-ignore
        const serverApp = app.listen(this.port, () => { 
            if (this.message) console.log(this.message)
        })

        serverApp

        async function stop()  {
            serverApp.close() // Stop the Express Server
        }

        process.on('INKSTATS_STOP', stop)

    }

    /**
     * Starts your InkStats Instance
     */
    public start = () => {
    this.checks()
    this.expressServer()
    }

    /**
     * Stops your InkStats Instance
     */
    public kill = async() => {
        // @ts-ignore
        await process.emit('INKSTATS_STOP')
    }

}