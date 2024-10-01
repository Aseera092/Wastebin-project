import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import MapView from '../components/mapView'

export default function MainLayout() {
    return (
        <main style={{
            position: 'relative'
        }}>
            <Navbar />
            <MapView />
            <div style={{
                position: 'absolute',
                top: '10vh',
                height: '90vh',
                width: '100%'
            }}>
                <Outlet />
            </div>
        </main>
    )
}
