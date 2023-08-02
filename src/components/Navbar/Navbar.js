import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const shouldHideNavbar = location.pathname.includes('/admin');

    return (
        !shouldHideNavbar && (
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TuTumobile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href='/voitures'>Voitures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)
    );
};

export default Navbar;