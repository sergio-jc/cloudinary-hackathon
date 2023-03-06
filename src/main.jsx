import UserProvider from '@context/user-data'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ImageProvider from './context/download-image'
import './index.css'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ImageProvider>
  </React.StrictMode>
)
