import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { DateProvider } from './Contexts/DateContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { DoctorProvider } from './Contexts/DoctorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <DoctorProvider>
      <DateProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </DateProvider>
    </DoctorProvider>
  </Router>
)
