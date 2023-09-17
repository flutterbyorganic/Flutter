import { useState } from "react";
import { Nav } from "react-bootstrap";


const Header = () => {
    

    return (
        <>
        <div className="main-menu">
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Bath & Body</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Gift</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Hand</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Fragrance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-5">Hair</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-6">Mens</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-7">Collections</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        </>
    )
}

export default Header;