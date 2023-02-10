import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

/**
 * It takes an object with two properties, `req` and `res`, and returns an object with no properties.
 * @param  - trpcExpress.CreateExpressContextOptions
 */
export const createContext =  ({
    req,
     res
}: trpcExpress.CreateExpressContextOptions) => ({})

/* Creating a new instance of the TRPC server. */
const t = initTRPC.context().create()

/* Exporting the router, middleware, and publicProcedure from the TRPC server. */
export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
