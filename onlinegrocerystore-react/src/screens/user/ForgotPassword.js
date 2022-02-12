import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = ({history}) => {
  const question = [
    {
      value: "What is your Nickname",
      label: "What is your Nickname",
    },
    {
      value: "Your first mobilenumber",
      label: "Your first mobilenumber",
    },
    {
      value: "Your Favorite place",
      label: "Your Favorite place",
    },
  ];
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [securityQuestion, setsecurityQuestion] = useState(question[0].value);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/user/forgotpassword", {
        email,
        mobileNumber,
        newPassword,
        securityQuestion,
        answer
      })
      .then((res) => {
        if(res.data===true){
          toast.success("Password changes Matched")
          setTimeout(() => {
            history.push('/login')
          }, 2000);
        }else{
          toast.error("Credentilas not Matched")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} className="p-5 m-auto">
          <h5 className="text-center">Forgot Password</h5>
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
              type="number"
              name="number"
              placeholder="Enter Mobile Number"
              required
              id="number"
              onChange={(e) => setmobileNumber(e.target.value)}
              value={mobileNumber}
            />
            <Row className="mb-3">
              <Col>
                <Form.Select
                  className="p-3"
                  id="securityQuestion"
                  label="Security Question"
                  onChange={(e) => setsecurityQuestion(e.target.value)}
                  value={securityQuestion}
                >
                  {question.map((option) => (
                    <option key={option.value} value={option.value}>
                      {" "}
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Control
                  className="p-3"
                  required
                  id="asnwer"
                  name="asnwer"
                  type="text"
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                  placeholder="Answer"
                />
              </Col>
            </Row>
            <Form.Control
              className="mb-3 p-3"
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              id="password"
              onChange={(e) => setnewPassword(e.target.value)}
              value={newPassword}
            />
            <Button
              className="w-100 p-3"
              type="submit"
              style={{ backgroundColor: "#8c14fc" }}
            >
              Save
            </Button>
            <ToastContainer autoClose={1000}/>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
