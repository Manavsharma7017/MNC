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
        element: <Dashbord></Dashbord>
      }, {
        path: "/restaurant/:id",
        element: <Restaurant></Restaurant>
      }, {
        path: "/cart",
        element: <Cart></Cart>
      }]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
