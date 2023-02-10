import express from 'express'
import morgan from 'morgan'

/* Importing the router and createContext from the trpc file. */
/* Importing the trpc server and the trpc express adapter. */
/* import * as trpc from '@trpc/server'*/
import * as trpcExpress from '@trpc/server/adapters/express';
import {router, createContext} from './trpc'
import {notesRouter} from './routes/notes'
import cors from 'cors'

const app = express()

/* Creating a router that will handle all requests to the `/trpc` endpoint. */
const appRouter = router({
    note: notesRouter,
});

app.use(cors());
app.use(morgan("dev"))

/* Creating a middleware that will handle all requests to the `/trpc` endpoint. */
app.use("trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

export type AppRouter = typeof appRouter

export default app