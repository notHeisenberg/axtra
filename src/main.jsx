import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { ThemeProvider } from './providers/ThemeProvider'
import { startTransition } from 'react'
import './index.css'

startTransition(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
})
