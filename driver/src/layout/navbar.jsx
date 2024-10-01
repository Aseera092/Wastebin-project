import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow p-3 justify-content-between" style={{position:'relative',zIndex:1000}}>
            <a className="navbar-brand font-weight-bold text-dark" href="#">Waste Collecting System</a>
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-2x fa-user-circle"></i> </a>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">My account</a>
                <a className="dropdown-item" href="#">Log out</a>
            </div>
        </nav>
    )
}
