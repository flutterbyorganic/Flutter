import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { Container, Image, NavLink } from "react-bootstrap";
import Logo from '../../assests/img/logo.png';

import { Link } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    return (
        <>
          <div className="admin-sidebar">
                <div className="admin-sidebar-wraper">
                    <div className="sidebar-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="sidebar-container">
                        <h6 className="main-navigation">Main navigation</h6>
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className={`${location.pathname === '/category' ? 'active' : ''}`}>
                                    <Link to="/category"><span className="icon-dashboard" /> Category</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${location.pathname === '/sub-category' ? 'active' : ''}`}>
                                    <Link to="/sub-category"><span className="icon-dashboard" /> Sub-Category</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${location.pathname === '/product' ? 'active' : ''}`}>
                                <Link to="/product"><span className="icon-tank" /> Product</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`${location.pathname === '/add-banner' ? 'active' : ''}`}>
                                    <Link to="/add-banner"><span className="icon-dashboard" /> Add Banner</Link>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;