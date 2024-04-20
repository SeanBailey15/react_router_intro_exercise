import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import Candy from './Candy'
import './styles/main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <VendingMachine />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/soda",
    element: <Soda />,
  },
  {
    path: "/chips",
    element: <Chips />,
  },
  {
    path: "/candy",
    element: <Candy />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
