import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {configureRoutes} from "./routes";

const express = require("express");

export const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World, from express');
});

configureRoutes(app);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
}