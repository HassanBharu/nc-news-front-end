import React from 'react'
import { Link } from '@reach/router'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">NcNews</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white text-uppercase ml-5" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white text-uppercase ml-5" href="/topics">Topics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white text-uppercase ml-5" href="/topics">Articles</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white text-uppercase ml-5" href="/users">Users</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar