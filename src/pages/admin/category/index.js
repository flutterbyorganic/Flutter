import { useState } from "react";
import { Row, Dropdown, Button, Form, InputGroup, DropdownButton, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import Sidebar from "../../sidebar";
import AdminHeader from "../adminHeader";

const Category = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="admin-common-body">
                <div className="admin-header-wrapper">
                    <h1 className="admin-header-title">Category</h1>
                    <div className="header-wrapper">
                        <div className="header-left">
                            <Form className="search-sec message-search">
                                <InputGroup className="search-group">
                                    <InputGroup.Text id="basic-addon1" className="search-icon">
                                        <span className="icon-search" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        className="form-input search-input"
                                        type="search"
                                        placeholder="Search..."
                                    />
                                </InputGroup>
                            </Form>
                        </div>
                        <div className="header-right">
                            <Button className="btn primary header-primary-btn" onClick={handleShow}>Add Category</Button>
                        </div>
                    </div>
                </div>
                <div className="list-container service-list-container">
                    <div className="table-wrapper mobile-optimised">
                        <div className="thead">
                            <div className="row tr">
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>Name</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>Priority</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-35" >
                                    <span className="table-heading">
                                        <span>Logo</span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-15 text-center">
                                    <span className="table-heading">
                                        <span>Status</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="row tr">
                                <div className="td flex-table-column-25">
                                    <p className="listing-title text-capitalize">Name</p>
                                </div>
                                <div className="td flex-table-column-25">
                                    <div>
                                        <p className="listing-normal mb-0">litre</p>
                                    </div>
                                </div>
                                <div className="td flex-table-column-35">
                                    <p className="listing-normal mb-0">Description</p>
                                </div>
                                <div className="td flex-table-column-15">
                                    <div className="listing-normal">
                                        <div className="listing-normal text-center">
                                            <DropdownButton className="icon-three-dot manage-three-dot">
                                                <Dropdown.Item>Edit</Dropdown.Item>
                                                <Dropdown.Item>Delete</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal centered className="common-modal boarding-login" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Category</Modal.Title>
                    <img className="btn-close" src={closeIcon} alt="close icon" />
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="modal-body-form">
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Enter Name</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter name"
                                            name="name"
                                            autoComplete="off"
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Priority</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter name"
                                            name="name"
                                            autoComplete="off"
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <div className="wrap-select wrap-input">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Select>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Logo (Optional)</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="footer-modal">
                            <Button type="submit" className="btn primary modal-btn-submit">Add</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    )
}

export default Category