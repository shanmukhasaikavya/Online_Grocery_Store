import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {IoSend} from 'react-icons/io5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const Message = {
      email:localStorage.getItem('userToken'),
      subject,
      message
  }
  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:8080/user/message',Message).then(res=>{
          console.log(res.data)
          toast.success("Message sent succesfully")
          setSubject('')
          setMessage('')
      }).catch(err=>{
        console.log(err)
        toast.error("Something went wrong!")
        
      })
  }
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} className="p-5 m-auto">
          <h2 className="text-center">Send Message</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Enter Subject :</Form.Label>
            <Form.Control
              className="mb-3 p-3"
              type="text"
              name="subject"
              required
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <Form.Label>Enter Message :</Form.Label>
            <Form.Control
            id="textarea" 
            as="textarea" 
            required
            rows={3}  
            value={message}
            placeholder="Enter Text"
            onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="w-100 p-3 mt-3"
              type="submit"             
              style={{ backgroundColor: "#8c14fc" }}
            >
              Send
              <IoSend size={20} style={{marginLeft:20}}/>
            </Button>
            <ToastContainer />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
