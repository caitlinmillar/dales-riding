import React from 'react'
import { ROUTES } from '../../constants'
import { Nav } from './navbar.styled'
import './index.css'

export default function Navbar() {
    return (
        <Nav
            className="navbar navbar-expand-lg navbar-light"
        >
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample08"
                    aria-controls="navbarsExample08"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbarsExample08"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href={ROUTES.HOME} className="nav-link active" aria-current="page" >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={ROUTES.RIDING} className="nav-link">
                                Riding
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={ROUTES.HORSES} className="nav-link">
                                Meet the horses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={ROUTES.GARDEN} className="nav-link">
                                Garden projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={ROUTES.PELLETS} className="nav-link">
                                Pellet prices
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={ROUTES.RACING} className="nav-link">
                                H20 racing
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}