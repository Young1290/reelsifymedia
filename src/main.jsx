import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EventFilming from './pages/EventFilming'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/services/event-filming', element: <EventFilming /> },
  { path: '/portfolio', element: <Portfolio /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
