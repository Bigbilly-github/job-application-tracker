import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx'
import JobDisplay from './pages/jobdisplay.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>
  },

  {
    path:"/jobsdisplay",
    element: <JobDisplay/>
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
