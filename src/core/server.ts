import cors from 'cors'
import express from 'express'
import {Express} from 'express-serve-static-core'
import * as dotenv from 'dotenv'
import helmet from 'helmet'
import { Server } from 'http'
import unexpectedErrorMiddleware from '~/api/middlewares/error.global'
import { apiRouter } from './api.router'
import { relations } from './database/relations'

dotenv.config()

export async function createServer(): Promise<Express>{

    const app = express();
    let server: Server;
    app.use(helmet())

    app.use(express.json({ limit: '10kb' }));

    app.use(cors())

    app.use(apiRouter)

    app.use(unexpectedErrorMiddleware)
    relations()

    return app;
}
