import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import AppProvider from './hooks'
import GlobalStyles from "./styles/globalStyles.js"
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from './config/stripeConfig.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='colored' />
    </AppProvider>
  </StrictMode>,
)
