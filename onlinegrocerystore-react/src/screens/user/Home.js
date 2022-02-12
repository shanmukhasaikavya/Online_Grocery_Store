import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ProductCard from "../../components/ProductCard"

const Home = () => {
  const [product,setProduct] = useState([])
  const [init,setInit] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/user/products').then(res=>{
      console.log(res.data);
      setProduct(res.data)
      setInit(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  const [banner,setBanner]=useState(require('../../images/BANNER.png'))
  const banners = [{
    id:1,
    category:"vegetable",
    image:require('../../images/vegetables.png')
  },
  {
    id:2,
    category:"fruit",
    image:require('../../images/fruits.png')
  },
  {
    id:3,
    category:"Dairy and Backery",
    image:require('../../images/dairyandbackery.png')
  },
  {
    id:4,
    category:"Snacks and Branded Foods",
    image:require('../../images/snacks.png')
  },
  {
    id:5,
    category:"Beverages",
    image:require('../../images/beverages.png')
  },
  {
    id:6,
    category:"Personal Care",
    image:require('../../images/personalcare.png')
  },
  {
    id:7,
    category:"Home Care",
    image:require('../../images/homecare.png')
  },
  {
    id:8,
    category:"Baby Care",
    image:require('../../images/babycare.png')
  }

  ]
  const handleChanged = (cartItem) => {
    const result = init.filter((curdata) => {
      return curdata.category === cartItem;
    });
      const res = banners.filter((curdata)=>{
        return curdata.image ? curdata.category===cartItem:null;
      })
      setBanner(res[0].image)
      setProduct(result);
    console.log(product);
  };
  return (
    <Container className="mt-4">
      <Row>
        <Col lg={3} md={6}>
          <h3 style={{ color: "black", marginBottom: "20px" }}>
            Categories of Products
          </h3>
          <Button className="btn btn-dark w-100 mb-4" onClick={()=>{setProduct(init);setBanner(require('../../images/BANNER.png'))}}>All</Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("vegetable")}
          >
            Vegetables
          </Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("fruit")}>Fruits</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Dairy and Backery")}>
            Dairy and Bakery
          </Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Snacks and Branded Foods")}>
            Snacks and Branded Foods
          </Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={()=>handleChanged("Beverages")}>Beverages</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={()=>handleChanged("Personal Care")}>Personal Care</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={()=>handleChanged("Home Care")}>Home Care</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={()=>handleChanged("Baby Care")}>Baby Care</Button>
        </Col>
        <Col lg={9}>
        <img className="img-fluid " src={banner} alt="name"></img>
          <Row className="d-flex justify-content-around align-item-center ">
          {product.map(item=>(
            <ProductCard products={item}/>
          ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
