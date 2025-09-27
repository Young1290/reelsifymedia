import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EventFilming from './pages/EventFilming'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import KLEventVideographyChecklist from './pages/blog/KLEventVideographyChecklist'
import EventFilmingKL from './pages/services/EventFilmingKL'
import EventPhotographyKL from './pages/services/EventPhotographyKL'
import DroneVideographyKL from './pages/services/DroneVideographyKL'

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/services/event-filming', element: <EventFilming /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/about', element: <About /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/kl-event-videography-checklist', element: <KLEventVideographyChecklist /> },
  { path: '/event-filming-kl', element: <EventFilmingKL /> },
  { path: '/event-photography-kl', element: <EventPhotographyKL /> },
  { path: '/drone-videography-kl', element: <DroneVideographyKL /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
