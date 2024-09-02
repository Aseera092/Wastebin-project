import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <div class="col py-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
