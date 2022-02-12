import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useCart } from "react-use-cart";

const BillingAddress = () => {
  
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  
  const [mobileNumber, setMobileNumber] = useState("");
  const { cartTotal ,items} = useCart();

  const handleSubmit = (e) =>{
    e.preventDefault()
    for(var i=0;i < items.length; i++)
    {
      const Order ={
        "productId":items[i].id,
        "productName":items[i].name,
        "productPrice":items[i].price,
        "qty":items[i].quantity,
        "category":items[i].category,
        "email":localStorage.getItem('userToken'),
        "cartTotal":cartTotal,
        address,
        city,
        state,
        country,
        payment:"Cash on delivery",
        mobileNumber,
        
      }
      console.log(Order)
      axios.post('http://localhost:8080/user/placeorder',Order).then(
        res=>{console.log(res.data)}
      )
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="p-5 m-auto">
            <h1 className="text-center">Rs.{cartTotal}</h1>
            <h5 className="text-center">Details Of Address</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                className="mb-3 p-3"
                type="address"
                name="address"
                placeholder="Enter Address"
                required
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <Form.Control
                className="mb-3 p-3"
                type="city"
                name="city"
                placeholder="Enter City"
                required
                id="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />

              <Form.Control
                className="mb-3 p-3"
                type="state"
                name="state"
                placeholder="Enter State"
                required
                id="state"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
              <Form.Control
                className="mb-3 p-3"
                type="country"
                name="country"
                placeholder="Enter Country"
                required
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
              <Form.Control
                className="mb-3 p-3"
                type="payment"
                name="payment"
                placeholder="Enter Payment Mode"
                disabled
                id="payment"
                value={"Cash on Delivery"}
              />
              <Form.Control
                className="mb-3 p-3"
                type="mobilenumber"
                name="mobilenumber"
                placeholder="Enter Mobile Number"
                required
                id="mobilenumber"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
              />
              <Button
                className="w-100 p-3"
                type="submit"
                style={{ backgroundColor: "#8c14fc" }}
              >
                Order Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BillingAddress;
