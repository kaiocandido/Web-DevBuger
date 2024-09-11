import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './containers/Login'
import globalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <globalStyles />
  </StrictMode>,
)
