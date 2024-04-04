import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './provider/Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className=' bg-gradient-to-r from-purple-700 to-red-500'>
<RouterProvider router={router} />
</div>

    </AuthProvider>



  </React.StrictMode>,
)
