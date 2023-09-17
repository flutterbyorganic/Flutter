import { useState } from "react";
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const AdminHeader = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Navbar className="header-nav" expand="lg">
                <Container fluid className="header-container">
                    <Navbar.Brand className= "manage-subscription-header header-logo">
                        {/* <img className="logo" src={Logo} alt="Logo" width={71} /> */}
                    </Navbar.Brand>
                    <Navbar className="manage-subscription-header">
                        <Nav className="nav-menu">
                            <Nav.Item className="pl-30">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <span className="icon-username" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Login</Dropdown.Item>
                                        <Dropdown.Item>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    )
}

export default AdminHeader;