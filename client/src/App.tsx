import { trpc } from './trpc'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import NotesList from './components/NotesList'
import './App.css'

function App() {

/* - It is creating a new QueryClient and a new trpcClient.
  - The httpBatchLink is using the url "http://localhost:3000/trcp" to make the queries. */
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => 
      trpc.createClient({
        links: [
          httpBatchLink({
            url: "http://localhost:3000/trcp"
          })
        ]
      })
    );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient} >
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Vite + React (TRPC)</h1>
          <div className="card">
              <NotesList />
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
