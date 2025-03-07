import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ContextProvider from './components/propscontext.jsx'
import Homepage from './pages/homepage.jsx'
import JobDisplay from './pages/jobdisplay.jsx'


const router =  createBrowserRouter([
  
  { path: "/",
    element: <Homepage/>,
    errorElement: <div>404 Not Found</div>
  },
  { path: "/jobs",
    element: <JobDisplay/>,
    errorElement: <div>404 Not Found</div>
  },
  


]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
          
          <RouterProvider router={router} />
        
        
      </ContextProvider>
   
  </StrictMode>
)
