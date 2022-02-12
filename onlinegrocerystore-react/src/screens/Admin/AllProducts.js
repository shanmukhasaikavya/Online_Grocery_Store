import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";


import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllProducts = ({ history }) => {
  const [product, setProduct] = useState([]);
  const [init, setInit] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setInit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChanged = (cartItem) => {
    const result = init.filter((curdata) => {
      return curdata.category === cartItem;
    });
    setProduct(result);
  };
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8080/admin/product/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Succesfully Deleted Product");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong!");
      });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3} md={6}>
          <h3 style={{ color: "black", marginBottom: "20px" }}>
            Categories of Products
          </h3>
          <Button
            className="btn btn-dark w-100 mb-4 shadow-lg rounded"
            onClick={() => {
              setProduct(init);
            }}
          >
            All
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("vegetable")}
          >
            Vegetables
          </Button>
          <Button
            className="btn btn-warning shadow-lg rounded w-100 mb-4"
            onClick={() => handleChanged("fruit")}
          >
            Fruits
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Dairy and Backery")}
          >
            Dairy and Bakery
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Snacks and Branded Foods")}
          >
            Snacks and Branded Foods
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Beverages")}
          >
            Beverages
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Personal Care")}
          >
            Personal Care
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Home Care")}
          >
            Home Care
          </Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("Baby Care")}
          >
            Baby Care
          </Button>
        </Col>
        <Col lg={9}>
          <Row className="d-flex justify-content-around align-item-center ">
            {product.map((item) => (
              <Card style={{ width: "16rem" }} key={item.name} className="m-2">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ width: "200px", height: "200px" }}
                />
                <Card.Footer className="text-muted">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Title>Rs.{item.price}</Card.Title>
                  <p>{item.active ? "In Stock " : "Not in Stock"} </p>
                  <Button
                    variant="success"
                    onClick={() => history.push(`productcategory/${item.id}`)}
                  >
                    Edit <AiFillEdit size={20} />
                  </Button>

                  <Button
                    variant="danger m-2"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete <AiFillDelete size={20} />
                  </Button>
                </Card.Footer>
                <ToastContainer autoClose={3000} />
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AllProducts;
