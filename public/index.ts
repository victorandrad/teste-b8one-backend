import "reflect-metadata";
import * as express from "express";
import { Routes } from "../routes/api";
import { createConnection } from "typeorm";
import { Request, Response, NextFunction } from "express";

createConnection().then(async () => {
    const app = express();
    const cors = require('cors');

    app.use(cors());
    app.use(express.json());

    Routes.forEach(route => {

        (app as any)[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {

            const result = (new (route.controller as any))[route.action](req, res, next);

            if (result instanceof Promise) {

                result.then(result => !!result ? res.send(result) : undefined).catch(() => res.status(400).json());

            } else if (result !== null && result !== undefined) {

                result.json();

            }
        });
    });

    app.listen(process.env.APP_PORT);
}).catch(error => console.log(error));