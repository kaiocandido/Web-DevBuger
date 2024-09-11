import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import globalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <globalStyles />
    <ToastContainer autoClose={2000} theme='colored' />
  </StrictMode>,
)
