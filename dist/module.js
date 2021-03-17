"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InkStats = void 0;
const app_1 = require("./app");
const config_1 = require("./config");
class InkStats {
    constructor(options) {
        /**
         * The Port for your InkStats Instance to Run On
         */
        this.port = 8080;
        /**
         * A Message to be logged to your Console when your InkStats Instance Starts
         */
        this.message = undefined;
        /**
         * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
         */
        this.name = config_1.appName;
        this.checks = () => {
            if (!this.port)
                this.port = 8080;
            if (this.message) {
                var port = this.port;
                var str = this.message;
                str = str.replace('{port}', `${port}`);
                this.message = str;
            }
            if (!this.name) {
                this.name = config_1.appName;
            }
            // @ts-ignore
            global.nametitle = this.name;
        };
        /**
         * Starts your InkStats Instance
         */
        this.start = () => {
            this.checks();
            this.expressServer();
        };
        /**
         * Stops your InkStats Instance
         */
        this.kill = () => __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            yield process.emit('INKSTATS_STOP');
        });
        this.port = options.port;
        this.message = options.message;
        this.name = options.name;
    }
    expressServer() {
        // @ts-ignore
        const serverApp = app_1.default.listen(this.port, () => {
            if (this.message)
                console.log(this.message);
        });
        serverApp;
        function stop() {
            return __awaiter(this, void 0, void 0, function* () {
                serverApp.close(); // Stop the Express Server
            });
        }
        process.on('INKSTATS_STOP', stop);
    }
}
exports.InkStats = InkStats;
