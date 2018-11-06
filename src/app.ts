import * as express from "express";

export class App {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();

        this.express.use("/", router);
    }
}

export default new App().express;