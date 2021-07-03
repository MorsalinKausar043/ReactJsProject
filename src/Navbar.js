import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="./Contact">contact</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="./About">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="./Services">Services</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="./Portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact className="nav-link" to="./Count">Count</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>

        </>
    )
}

export default Navbar;
