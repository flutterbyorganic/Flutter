import { useEffect, useState } from "react";
import { Row, Dropdown, Button, Form, InputGroup, DropdownButton, Col, Modal, } from "react-bootstrap";
import defaultIcon from '../../../assests/icons/defaultSort.svg';
import closeIcon from '../../../assests/icons/close.svg';
import Sidebar from "../../sidebar";
import AdminHeader from "../adminHeader";
import { deleteData, fetchData, postData, updateData } from "../../../apis/api";

const Product = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        productName: '',
        description: '',
        categoryId: '',
        subCategoryId: '',
        productImage: '',
        thumbnailImage: '',
        unit: '',
        totalPrice: 0,
        discountPrice: 0,
        shippingCost: 0,
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
                    fetchProduct();
                })
                .catch((error) => {
                    setSelectedItemId(null);
                    console.error('Error deleting item:', error);
                });
        }
    }, [selectedItemId]);

    const resetFormData = () => {
        setFormData({
            productName: '',
            description: '',
            categoryId: '',
            subCategoryId: '',
            productImage: '',
            thumbnailImage: '',
            unit: '',
            totalPrice: '',
            discountPrice: '',
            shippingCost: '',
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
        setFormData(pre => ({ ...pre, [name]: value }))
    };


    const handlePostData = (e) => {
        e.preventDefault();
        console.log("product data ", formData);
        const routeName = formData.id === '' ? '/product' : `/product/${formData.id}`;
        if (formData.id === '') {
            delete formData.id;
            postData(routeName, formData, { accept: 'application/json' })
                .then((result) => {
                    console.log('product data post successfully:', result);
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
                    console.log('product data edit successfully:', result);
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

    const fetchProduct = (id = '') => {
        console.log("scsvsv ", id);
        const routeName = formData.id === '' ? '/product' : `/product/${id}`;
        fetchData(routeName)
            .then((result) => {
                if (id === '') {
                    setProduct(result);
                    console.log("Product", result);
                }
                else {
                    setFormData({
                        id: result._id,
                        categoryId: result.categoryId,
                        subCategoryId: result.subCategoryId,
                        productName: result.productName,
                        productImage: result.productImage,
                        thumbnailImage: result.thumbnailImage,
                        unit: result.unit,
                        totalPrice: result.totalPrice,
                        discountPrice: result.discountPrice,
                        shippingCost: result.shippingCost,
                        description: result.description,
                        status: result.status,
                    });
                    console.log("updateupdateupdateupdateupdateupdateupdate", formData);
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
        fetchProduct();
        fetchSubCategories();
        fetchCategories();
    }, []);

    return (
        <>
            <div className="admin-right-main">
                <div className="admin-common-body">
                    <div className="admin-header-wrapper">
                        <h1 className="admin-header-title">Product</h1>
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
                                <Button className="btn primary header-primary-btn" onClick={handleShow}>Add Product</Button>
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
                                {product?.map((item, index) => (
                                    <div className="row tr" key={index + 1}>
                                        <div className="td flex-table-column-25">
                                            <p className="listing-title text-capitalize">{item.productName}</p>
                                        </div>
                                        <div className="td flex-table-column-25">
                                            <div>
                                                <p className="listing-normal mb-0">{item.unit}</p>
                                            </div>
                                        </div>
                                        <div className="td flex-table-column-35">
                                            <p className="listing-normal mb-0">{item.description}</p>
                                        </div>
                                        <div className="td flex-table-column-15">
                                            <div className="listing-normal">
                                                <div className="listing-normal text-center">
                                                    <DropdownButton className="icon-three-dot manage-three-dot">
                                                        <Dropdown.Item onClick={() => fetchProduct(item._id)}> Edit</Dropdown.Item>
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
            </div>
            <Modal centered className="common-modal boarding-login" show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{formData.id === '' ? 'Add' : 'Edit'} Product</Modal.Title>
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
                                    <Form.Label>Enter Product Name</Form.Label>
                                    <Form.Control
                                        type="type"
                                        className="form-input"
                                        placeholder="Enter Product Name"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Label>Category</Form.Label>
                                <Form.Group className="form-mt-space">
                                    <Form.Select value={formData.category} name="categoryId" onChange={handleInputChange}>
                                        {category?.map((cat, index) => (
                                            <option value={cat?._id} key={index + 1}>{cat?.name}</option>
                                        )
                                        )}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Label>Sub-Category</Form.Label>
                                <Form.Group className="form-mt-space">
                                    <Form.Select value={formData.subCategory} name="subCategoryId" onChange={handleInputChange}>
                                        {subCategory?.map((subCat, index) => (
                                            <option value={subCat?._id} key={index + 1}>{subCat?.name}</option>
                                        )
                                        )}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        value={formData.productImage}
                                        name='productImage'
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space react-upload-file">
                                    <Form.Label>Thumbnail Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        value={formData.thumbnailImage}
                                        name='thumbnailImage'
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Unit (eg. kg, grm, lit)</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        className="form-input"
                                        placeholder="Enter Unit"
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Total Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        className="form-input"
                                        placeholder="Enter Total Price"
                                        name="totalPrice"
                                        value={formData.totalPrice}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Discount Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        className="form-input"
                                        placeholder="Enter Discount Price"
                                        name="discountPrice"
                                        value={formData.discountPrice}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} className=" ">
                                <Form.Group className="form-mt-space">
                                    <Form.Label>Shipping Cost (Optional)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        className="form-input"
                                        placeholder="Enter Shipping Cost"
                                        name="shippingCost"
                                        value={formData.shippingCost}
                                        onChange={handleInputChange}
                                    />
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
                                <div className="wrap-select wrap-input">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Group className="mb-3">
                                        <textarea
                                            rows={4}
                                            cols={40}
                                            className="w-100"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange} />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer-modal">
                            <Button type="submit" className="btn primary modal-btn-submit">{formData.id === '' ? 'Add' : 'Edit'} Product</Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    )
}

export default Product;