import { useState } from "react";
import { Container, Image, NavLink } from "react-bootstrap";
import Logo from '../../assests/img/logo.png';

import { Link } from "react-router-dom";

const Sidebar = () => {

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
                                <NavLink className="nav-link active">
                                    <Link to="/category"><span className="icon-dashboard" /> Category</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">
                                    <Link to="/sub-category"><span className="icon-dashboard" /> Sub-Category</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">
                                <Link to="/product"><span className="icon-tank" /> Product</Link>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">
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