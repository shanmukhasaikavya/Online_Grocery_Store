import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert,setAlert] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/login", { email, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.email === "admin@gmail.com") {
          localStorage.setItem("adminToken", res.data.email);
          localStorage.removeItem("userToken");
          window.location = "/admin";
        } else if (res.data && res.data.email !== "admin@gmail.com") {
          localStorage.setItem("userToken", res.data.email);
          localStorage.removeItem("adminToken");
          window.location = "/user/productcategory";
        }
      })
      .catch((err) => {
        console.log(err);
        setAlert(true)
        console.log(alert)
      });
  };
  return (
    <div className="img">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="p-5 m-auto">
            <h1 className="text-center text-white">
              <MdAccountCircle size={60} color="#8c14fc" />
            </h1>
            <h5 className="text-center">Sign in</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                className="mb-3 p-3"
                type="email"
                name="email"
                placeholder="Enter email"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
                className="mb-3 p-3"
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button
                className="w-100 p-3"
                type="submit"
                style={{ backgroundColor: "#8c14fc" }}
              >
                Login
              </Button>
            </Form>
            <Row className="text-center m-2">
              <Col>
                <p>
                  Create an account?<Link to="/register">Register</Link>
                </p>
              </Col>
              <Col>
                <p>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {alert ? (
          <Alert variant="danger" onClose={() => setAlert(false)} dismissible className="w-50 text-center m-auto">
          <h6>Incorrect username or password</h6>
        </Alert>
        ):
        <></>
        }
      </Container>
    </div>
  );
};

export default Login;
