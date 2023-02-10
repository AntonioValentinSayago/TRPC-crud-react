import {publicProcedure, router} from '../trpc'

/* A function that returns an array of notes. */
 const getNotes = publicProcedure.query(() =>{
    return [{
        id:1,
        title:'Example',
        content: 'Example-1'
    }]
})

export const notesRouter = router({
    get: getNotes,
})