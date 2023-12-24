import { useEffect, useState } from "react";
import { Button, Col, Container, Image, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import product1 from '../../../assests/img/tshirt-1.jpg';
import product2 from '../../../assests/img/tshirt-2.jpg';
import product3 from '../../../assests/img/tshirt-3.jpg';
import product4 from '../../../assests/img/tshirt-4.jpg';
import Header from "../../header";
import TopHeader from "../../topHeader";
import Footer from "../../footer";
import Bestsellers from "../../bestSeller";


const ProductDetail = () => {

    return (
        <>
            <TopHeader />
            <Header />
            <div className="container-custom">
                <div className="single-product">
                    <div className="row-custom">
                        <div className="col-6-custom">
                            <div className="product-image">
                                <div className="product-image-main">
                                    <img src={product1} alt="" id="product-main-image" />
                                </div>
                                <div className="product-image-slider">
                                    <img src={product2} alt="" className="image-list" />
                                    <img src={product3} alt="" className="image-list" />
                                    <img src={product4} alt="" className="image-list" />
                                    <img src={product1} alt="" className="image-list" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6-custom">
                            <div className="breadcrumb">
                                <span><a href="#">Home</a></span>
                                <span><a href="#">Product</a></span>
                                <span className="active">T-shirt</span>
                            </div>

                            <div className="product">
                                <div className="product-title">
                                    <h2>Half Sleve T-shirt for Men</h2>
                                </div>
                                <div className="product-rating">
                                    <span><i className="bx bxs-star"></i></span>
                                    <span><i className="bx bxs-star"></i></span>
                                    <span><i className="bx bxs-star"></i></span>
                                    <span><i className="bx bxs-star"></i></span>
                                    <span><i className="bx bxs-star"></i></span>
                                    <span className="review">(47 Review)</span>
                                </div>
                                <div className="product-price">
                                    <span className="offer-price">$99.00</span>
                                    <span className="sale-price">$129.00</span>
                                </div>

                                <div className="product-details">
                                    <h3>Description</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                                </div>
                                <div className="product-size">
                                    <h4>Check Pincode</h4>
                                    <div className="check-pincode">
                                        <input type="text" name="check-pincode" className="size-input" placeholder="Enter Pincode" />
                                    </div>
                                </div>
                                {/* <div className="product-color">
                                    <h4>Color</h4>
                                    <div className="color-layout">
                                        <input type="radio" name="color" value="black" className="color-input" />
                                        <label for="black" className="black"></label>
                                        <input type="radio" name="color" value="red" className="color-input" />
                                        <label for="red" className="red"></label>

                                        <input type="radio" name="color" value="blue" className="color-input" />
                                        <label for="blue" className="blue"></label>
                                    </div>
                                </div> */}
                                <div class="qty-input">
                                    <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                    <input className="product-qty" type="number" name="product-qty" min="0" max="10" value="1" />
                                    <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                </div>
                                {/* <span className="divider"></span> */}

                                <div className="product-btn-group">
                                    <button type="submit" className="button add-to-cart">Add to Cart</button>
                                    <button type="submit" className="button add-to-wishlist">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bestsellers />
            <Footer />
        </>
    )
}

export default ProductDetail;