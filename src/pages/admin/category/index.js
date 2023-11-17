import { useEffect, useState } from "react";
import { Row, Dropdown, Button, InputGroup, DropdownButton, Form, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import { deleteData, fetchData, postData, updateData } from "../../../apis/api";

const Category = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        priority: '',
        status: '',
        logo: '',
    });

    // for deleting the row
    const [selectedItemId, setSelectedItemId] = useState(null);

    // for fetch the data
    useEffect(() => {
        if (selectedItemId) {
            deleteData(`/categories/${selectedItemId}`)
                .then(() => {
                    setSelectedItemId(null);
                    fetchCategories();
                })
                .catch((error) => {
                    setSelectedItemId(null);
                    console.error('Error deleting item:', error);
                });
        }
    }, [selectedItemId]);

    const resetFormData = () => {
        setFormData({
            id: '',
            name: '',
            priority: '',
            status: '',
            logo: '',
        });
    }

    const apiRefresh = () => {
        fetchCategories();
        handleClose();
    }

    //for submiting data into database
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('vaaa', e.target, e.target.value)
        if(name === 'logo') {
          let file = e.target.files[0]
          setFormData(pre => ({ ...pre, [name]: file}))
        //   setFormData({...formData, [name]: file});
        }
        console.log('{ ...pre, [name]: value}', { ...formData, [name]: value})
        setFormData(pre => ({ ...pre, [name]: value}))
    };


    const handlePostData = (e) => {
        e.preventDefault();
        console.log("formDataformData ", formData);
        const routeName = formData.id === '' ? '/categories' : `/categories/${formData.id}`;
        if (formData.id === '') {
            postData(routeName, formData, { accept: 'application/json' })
                .then((result) => {
                    console.log('Data posted successfully:', result);
                    resetFormData();
                    apiRefresh();
                    console.log("formData.logo ", formData);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            updateData(routeName, formData)
                .then((result) => {
                    console.log('Edit successfully:', result);
                    resetFormData();
                    apiRefresh();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    // id = null means all category else selected id category
    const fetchCategories = (id = '') => {
        const routeName = id === '' ? '/categories' : `/categories/${id}`;
        fetchData(routeName)
            .then((result) => {
                if (id === '') {
                    setCategory(result);
                }
                else {
                    setFormData({
                        id: result._id,
                        name: result.name,
                        priority: result.priority.toString(), // Convert to string if needed
                        status: result.status,
                        logo: result.logo,
                    });
                    handleShow();
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    // for fetch the data
    useEffect(() => {
        // Call the fetchData function
        fetchCategories();

        console.log("setSelectedItemId ", selectedItemId);
    }, []);

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
                                <div className="th flex-table-column-20" >
                                    <span className="table-heading">
                                        <span>Name</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-20" >
                                    <span className="table-heading">
                                        <span>Image</span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-20" >
                                    <span className="table-heading">
                                        <span>Priority</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>Status</span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-15 text-center">
                                    <span className="table-heading">
                                        <span>Action</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            {category?.map((cat, index) => (
                                <div className="row tr" key={index + 1}>
                                    <div className="td flex-table-column-20">
                                        <p className="listing-title text-capitalize">{cat.name}</p>
                                    </div>
                                    <div className="td flex-table-column-20">
                                        <img src={cat.logo} alt="logo" width="40" />
                                    </div>
                                    <div className="td flex-table-column-20">
                                        <div>
                                            <p className="listing-normal mb-0">{cat.priority}</p>
                                        </div>
                                    </div>
                                    <div className="td flex-table-column-25">
                                        <p className="listing-normal mb-0">Active</p>
                                    </div>
                                    <div className="td flex-table-column-15">
                                        <div className="listing-normal">
                                            <div className="listing-normal text-center">
                                                <DropdownButton className="icon-three-dot manage-three-dot">
                                                    <Dropdown.Item onClick={() => fetchCategories(cat._id)}> Edit</Dropdown.Item>
                                                    {/* <Dropdown.Item onClick={() => setSelectedItemId(cat._id)}> Edit</Dropdown.Item> */}
                                                    <Dropdown.Item onClick={() =>
                                                        setSelectedItemId(cat._id)
                                                    }>Delete</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div >
            <Modal centered className="common-modal boarding-login" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{formData.id === '' ? 'Add' : 'Edit'} Category</Modal.Title>
                    <img className="btn-close" src={closeIcon} alt="close icon" onClick={() => {
                        resetFormData();
                        handleClose();
                    }} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handlePostData(e)}>
                        <Row className="modal-body-form">
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Enter Name</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter name"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Priority</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="number"
                                            className="form-input"
                                            placeholder="Enter priority"
                                            id="priority"
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <div className="wrap-select wrap-input">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Select value={formData.status} name="status" onChange={handleInputChange}>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Logo (Optional)</Form.Label>
                                    <Form.Control type="file" value={formData.logo} name='logo' onChange={handleInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="footer-modal">
                            <Button type="submit" className="btn primary modal-btn-submit">{formData.id === '' ? 'Add' : 'Update'} </Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    )
}

export default Category;