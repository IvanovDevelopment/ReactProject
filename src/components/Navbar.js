import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/nodes">Узлы </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/kernel">Стержни </NavLink>
                </li>
            </ul>
        </nav>

    )
}