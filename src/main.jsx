import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './assets/components/Home/Home'
import About from './assets/components/About/About'
import Contact from './assets/components/Contact/Contact'
import Github from './assets/components/Github/Github'
import User from './assets/components/User/User'
import Params from './assets/components/Params/Params'
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/user/:passedParam",
        element: <User />
      },
      {
        path:"/github/:userParam",
        element: <Github />
      },
      {
        path:"/params",
        element: <Params />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
