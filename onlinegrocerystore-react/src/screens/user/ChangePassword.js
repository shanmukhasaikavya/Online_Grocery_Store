import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const [curPassword,setcurPassword] = useState('')
    const [newPassword,setnewPassword] = useState('')
    const [cnfPass,setcnfPass] = useState('')
    const email = localStorage.getItem("userToken")
    const Password = {email,curPassword,newPassword}
    const handleValid = ()=>{
        if(newPassword !==cnfPass)
        {
            toast.error("Password doesnt match")
            return false
        }
        return true;

    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        const isValid = handleValid()
        isValid && axios.put('http://localhost:8080/user/changepassword',Password).then(res=>{
            console.log(res)
            toast.success("Password Updated succesfully")
            setcurPassword('')
            setnewPassword('')
            setcnfPass('')
          }).catch(err=>{
            console.log(err);
            toast.error("Something went wrong!")
          })

    }
  return (
    <Container>
    <Row >
      <Col lg={6} md={6} sm={12} className='p-5 m-auto'>
        <h3 className='text-center'>Change Password</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Control  className="mb-3 p-3"
              type="password"
              name='curPassword' 
              placeholder='Old Password'
              required
              id="curPassword"
              onChange={e=>setcurPassword(e.target.value)}
             
              />
              <Form.Control  className="mb-3 p-3"
              type="password"
              name='newPassword' 
              placeholder='New Password'
              required
              id="newPassword"
              onChange={e=>setnewPassword(e.target.value)}
              />
              <Form.Control  className="mb-3 p-3"
              type="password" 
              name='cnfPass' 
              placeholder='Confirm Password'
              required
              id="cnfPass"
              onChange={e=>setcnfPass(e.target.value)}
             
              />
              <Button className='w-100 p-3' type="submit" style={{backgroundColor:"#8c14fc"}}>Save</Button>
              <ToastContainer />
          </Form>
       
      </Col>
    </Row>
   
  </Container>
  )
     
};

   

export default ChangePassword;