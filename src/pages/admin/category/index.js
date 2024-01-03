import { useEffect, useRef, useState } from "react";
import { Row, Dropdown, Button, InputGroup, DropdownButton, Form, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import { deleteData, fetchData, postData, updateData } from "../../../apis/api";

const Category = () => {
    const [image, setImage] = useState("");
    const inputRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState({
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
        setImage(inputRef.current.value);
        console.log({[name]: value}, '[name]: value[name]: value');
        setFormData(pre => ({ ...pre, [name]: value}));
    };

    // for uploading image
    const UploadImage = (e) => {
        setImage(inputRef.current.value);
        let file = e.target.files[0];
        const formDataFile = new FormData();
        formDataFile.append("file", file);
        postData("/fileUpload", formDataFile)
        .then((result) => {
            setFormData(pre => ({ ...pre, logo: result.url }));
            console.log('Uploading images successfully:', result.url);
        })
        .catch((error) => {
            console.error("Uploading images into api");
        });
    }

    const handlePostData = (e) => {
        e.preventDefault();
        console.log("subcategory data ", formData.id);
        const routeName = !isEdit ? '/categories' : `/categories/${formData.id}`;
        if (!isEdit) {
            postData(routeName, formData)
                .then((result) => {
                    console.log('Category data post successfully:', result);
                    resetFormData();
                    apiRefresh();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            updateData(routeName, formData)
                .then((result) => {
                    console.log('Category data edit successfully:', result);
                    resetFormData();
                    apiRefresh();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const fetchCategories = async (id) => {
        const routeName = id ? `/categories/${id}` : '/categories';
        try {
            const categoryData = await fetchData(routeName)
            if (id) {
                setFormData({
                id: categoryData._id,
                name: categoryData.name,
                priority: categoryData.priority.toString(), // Convert to string if needed
                status: categoryData.status,
                logo: categoryData.logo,
                });
                setIsEdit(true)
                handleShow();
            } else {
                setCategory(categoryData);
                setIsEdit(false)
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    // for fetch the data
    useEffect(() => {
        // Call the fetchData function
        fetchCategories();
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
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Logo (Optional)</Form.Label>
                                    <Form.Control type="file" ref={inputRef} value={image} name='logo' onChange={UploadImage} />
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