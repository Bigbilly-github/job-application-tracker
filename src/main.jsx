import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ContextProvider from './components/propscontext.jsx'
import Homepage from './pages/homepage.jsx'
import JobDisplay from './pages/jobdisplay.jsx'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<JobDisplay />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter>
    </ContextProvider>
  </StrictMode>
);
