import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <div className="py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
