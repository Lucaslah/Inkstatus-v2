import { port } from "./config";

const path = require("path");

const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.resolve(`views/index.ejs`), {
        test: '123'
    });
});


app.listen(port, () => {
    console.log(`Server Running at: http://localhost:${port}`);
});