import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import Auth from './page/Auth'
import Adminauth from './page/Adminauth'
import Landing from './page/Landing'
import Restaurant from './page/Restaurant'
import Dashbord from './page/Dasnbord'
import Cart from './page/Cart'
import { RecoilRoot } from 'recoil'

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      children: [{
        path: "/",
        element: <Landing></Landing>
      }, {
        path: "/auth",
        element: <Auth></Auth>
      }, {
        path: "/admin/auth",
        element: <Adminauth></Adminauth>
      },
      {
        path: "/admin/das",
        element: <Adminauth></Adminauth>
      }, {
        path: "/restaurant",
        element: <Restaurant></Restaurant>
      }, {
        path: "/cart",
        element: <Cart></Cart>
      }]
    }
  ])

  return (
    <div className='w-screen h-screen'>
      <RecoilRoot><RouterProvider router={router}></RouterProvider></RecoilRoot>
    </div>
  )
}

export default App
