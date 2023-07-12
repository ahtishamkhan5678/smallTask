import React from "react";

// making the arrow below here i.e;

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Product">Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Blog">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Register">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;