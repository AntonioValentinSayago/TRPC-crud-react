import express from 'express'
import morgan from 'morgan'

import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express';
import {router, createContext} from './trpc'

const app = express()

const appRouter = router({});

app.use(morgan("dev"))

app.use("trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

export default app