import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-warning">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">GarBage Collect</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle text-white px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fs-4 bi-archive"></i> <span class="ms-1 d-none d-sm-inline">Machine</span>  </a>
                        <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link to="add-machine" class="nav-link px-0 text-white"> <span class="d-none d-sm-inline">Add Machine</span> </Link>
                            </li>
                            <li>
                                <Link to="view-machine" class="nav-link px-0 text-white"> <span class="d-none d-sm-inline">View Machine</span> </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fs-4 bi-car-front"></i> <span class="ms-1 d-none d-sm-inline">Driver</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link to="add-driver" class="nav-link px-0 text-white"> <span class="d-none d-sm-inline">Add Driver</span> </Link>
                            </li>
                            <li>
                                <Link to="view-driver" class="nav-link px-0 text-white"> <span class="d-none d-sm-inline">View Driver</span> </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        {/* <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider" />
                </li> */}
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
