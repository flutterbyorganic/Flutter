import { useState } from "react";
import { Container, Nav, NavLink, Navbar, Row, Dropdown, Button, Form, InputGroup, DropdownButton, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import Sidebar from "../../sidebar";
import AdminHeader from "../adminHeader";
import ReactSelect from "react-select";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="admin-dashaboard">
            <Row className="m-0">
                <Sidebar />
                <div className="admin-dashboard-right">
                    <div className="main-header">
                        <AdminHeader />
                    </div>
                    <div className="admin-right-main">
                        <Outlet />
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Dashboard;