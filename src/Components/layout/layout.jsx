import React from 'react'
import Home from '../home/home'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../navbar/navbar'

const layout = () => {
  return (
    <main className="min-h-screen bg-indigo-800">
      <AppNavbar />
      <Outlet />
    </main>
  )
}

export default layout