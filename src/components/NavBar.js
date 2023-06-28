import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
        return (
            <div>
                <nav className="navbar fixed-top bg-dark border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav  d-flex justify-content-between">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className='dropdown-item' to='/business'>Business</Link></li>
                                        <li><Link className='dropdown-item' to='/entertainment'>Entertainment</Link></li>
                                        <li><Link className='dropdown-item' to='/health'>Health</Link></li>
                                        <li><Link className='dropdown-item' to='/science'>Science</Link></li>
                                        <li><Link className='dropdown-item' to='/sports'>Sports</Link></li>
                                        <li><Link className='dropdown-item' to='/technology'>Technology</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar
