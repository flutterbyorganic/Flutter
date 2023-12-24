import { useEffect, useState } from "react";
import { Button, Col, Container, Image, ListGroup, Nav, NavLink, Row } from "react-bootstrap";
import Slider from 'react-slick';
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seller from '../../assests/img/seller.png';
import seller2 from '../../assests/img/seller2.png';
import seller3 from '../../assests/img/seller3.png';
import { fetchData } from "../../apis/api";


const Bestsellers = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Call the fetchData function
    fetchData('/categories')
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
  console.log("data ", data);

  // const {category} = data;
  // console.log("category ", category);

  const dispatch = useDispatch();
  const [price, setPrice] = useState(100);
  const [name, setName] = useState(100);

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <>

        {/* for testing api's working or not ? */}
        {data?.map((item)=> (
            <div key={item?._id}>
                {item.category}
            </div>
        ))}
        {/* for testing api's working or not ? */}

          <Container className="best-slider">
            <div className="header-title">
                <h1>Bestsellers</h1>
            </div>
            <Slider {...settings2}>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link onClick={(e) =>
                      dispatch(addItem({ name: name, price}))
                    }>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller2} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller3} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
              <div className="slider-item">
                <div className="slider-item-pic">
                  <Image src={seller} alt="Seller icon" />
                </div>
                <Nav.Link className="seller-title text-truncate">Tobacco Absolute Bath & Shower Gel 10fl oz</Nav.Link>
                <div className="slider-item-wrap">
                  <h5>$35</h5>
                  <Nav.Link>Add +</Nav.Link>
                </div>
              </div>
            </Slider>

          </Container>
        </>
    )
}

export default Bestsellers;