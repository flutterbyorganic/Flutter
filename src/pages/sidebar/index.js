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
                                    <span className="icon-dashboard" /> Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">
                                    <span className="icon-tank" /> Account
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">
                                    <span className="icon-probes-catalog" /> Tank Catalog
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