import { useEffect, useState } from "react";
import { Row, Dropdown, Button, Form, InputGroup, DropdownButton, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import Sidebar from "../../sidebar";
import AdminHeader from "../adminHeader";
import { deleteData, fetchData, postData, updateData } from "../../../apis/api";

const AddBanner = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        bannerImage: '',
        heading: '',
        categoryId: '',
        subCategoryId: '',
        subheading: '',
        ctaButton: '',
        status: 'option2',
    });

    // for deleting the row
    const [selectedItemId, setSelectedItemId] = useState(null);

    // for fetch the data
    useEffect(() => {
        if (selectedItemId) {
            deleteData(`/product/${selectedItemId}`)
                .then(() => {
                    setSelectedItemId(null);
                    fetchBanner();
                })
                .catch((error) => {
                    setSelectedItemId(null);
                    console.error('Error deleting item:', error);
                });
        }
    }, [selectedItemId]);

    const resetFormData = () => {
        setFormData({
            categoryId: '',
            subCategoryId: '',
            bannerImage: '',
            heading: '',
            subheading: '',
            ctaButton: '',
            status: 'option2',
            status: '',
        });
    }


    const apiRefresh = () => {
        fetchSubCategories();
        handleClose();
    }

    //for submiting data into database
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('vaaa', e.target, e.target.value)
        if (name === 'logo') {
            let file = e.target.files[0]
            setFormData(pre => ({ ...pre, [name]: file }))
        }
        formData.categoryId = e.target.value;
        const abcd = formData.subCategoryId = e.target.value;
        console.log("abcd abcd ", abcd);

        setFormData(pre => ({ ...pre, [name]: value }));
    };


    const handlePostData = (e) => {
        e.preventDefault();
        console.log("before create banner formData value : ", formData);
        const routeName = formData.id === '' ? '/banners' : `/banners/${formData.id}`;
        if (formData.id === '') {
            delete formData.id;
            postData(routeName, formData, { accept: 'application/json' })
                .then((result) => {
                    console.log('banners data post successfully:', result);
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
                    console.log('banners data edit successfully:', result);
                    resetFormData();
                    apiRefresh();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    // id = null means all category else selected id category
    const fetchSubCategories = (id = '') => {
        const routeName = "/subCategories";
        fetchData(routeName)
            .then((result) => {
                if (id === '') {
                    setSubCategory(result);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const fetchCategories = (id = '') => {
        fetchData("/categories")
            .then((result) => {
                setCategory(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    const fetchBanner = (id = '') => {
        console.log("scsvsv ", id);
        const routeName = formData.id === '' ? '/banners' : `/banners/${id}`;
        fetchData(routeName)
            .then((result) => {
                if (id === '') {
                    setProduct(result);
                    console.log("Banner", result);
                }
                else {
                    setFormData({
                        id: result._id,
                        categoryId: result.categoryId,
                        subCategoryId: result.subCategoryId,
                        bannerImage: result.bannerImage,
                        heading: result.heading,
                        subheading: result.subheading,
                        ctaButton: result.ctaButton,
                        status: result,
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
        fetchBanner();
        fetchSubCategories();
        fetchCategories();
    }, []);

    return (
        <>
            <div className="admin-common-body">
                <div className="admin-header-wrapper">
                    <h1 className="admin-header-title">Add Banner</h1>
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
                            <Button className="btn primary header-primary-btn" onClick={handleShow}>Add Banner</Button>
                        </div>
                    </div>
                </div>
                <div className="list-container service-list-container">
                    <div className="table-wrapper mobile-optimised">
                        <div className="thead">
                            <div className="row tr">
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>Heading</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>SubHeading</span>
                                        <span className="icon-filter-custom">
                                            <img src={defaultIcon} alt="filter icon" />
                                        </span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-25" >
                                    <span className="table-heading">
                                        <span>Logo</span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-15" >
                                    <span className="table-heading">
                                        <span>CTA</span>
                                    </span>
                                </div>
                                <div className="th flex-table-column-10 text-center">
                                    <span className="table-heading">
                                        <span>Status</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            {product?.map((item, index) => (
                                <div className="row tr" key={index + 1}>
                                    <div className="td flex-table-column-25">
                                        <p className="listing-title text-capitalize">{item.heading}</p>
                                    </div>
                                    <div className="td flex-table-column-25">
                                        <p className="listing-title text-capitalize">{item.subheading}</p>
                                    </div>
                                    <div className="td flex-table-column-25">
                                        <p className="listing-normal mb-0">{item.bannerImage}</p>
                                    </div>
                                    <div className="td flex-table-column-15">
                                        <div>
                                            <p className="listing-normal mb-0">{item.ctaButton}</p>
                                        </div>
                                    </div>
                                    <div className="td flex-table-column-10">
                                        <div className="listing-normal">
                                            <div className="listing-normal text-center">
                                                <DropdownButton className="icon-three-dot manage-three-dot">
                                                    <Dropdown.Item onClick={() => fetchBanner(item._id)}> Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={() =>
                                                        setSelectedItemId(item._id)
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
            </div>
            <Modal centered className="common-modal boarding-login" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Banner</Modal.Title>
                    <img className="btn-close" src={closeIcon} alt="close icon" onClick={() => {
                        resetFormData();
                        handleClose();
                    }} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handlePostData(e)}>
                        <Row className="modal-body-form">
                            <Col xs={12} sm={12} className=" ">
                                <div className="wrap-select wrap-input">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Select value={formData.category} name="categoryId" onChange={handleInputChange}>
                                            {category?.map((cat, index) => (
                                                <option value={cat?._id} key={index + 1}>{cat?.name}</option>
                                            )
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <div className="wrap-select wrap-input">
                                    <Form.Label>SubCategory</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Select value={formData.subCategory} name="subCategoryId" onChange={handleInputChange}>
                                            {subCategory?.map((subCat, index) => (
                                                <option value={subCat?._id} key={index + 1}>{subCat?.name}</option>
                                            )
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Banner Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        value={formData.bannerImage}
                                        name='bannerImage'
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Heading</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter heading"
                                            name="heading"
                                            value={formData.heading}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Sub-Heading</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter heading"
                                            name="subheading"
                                            value={formData.subheading}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>CTA Button (e.g Register/Book Now)</Form.Label>
                                    <div className="wrap-input">
                                        <Form.Control
                                            type="type"
                                            className="form-input"
                                            placeholder="Enter ctaButton"
                                            name="ctaButton"
                                            value={formData.ctaButton}
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

export default AddBanner;