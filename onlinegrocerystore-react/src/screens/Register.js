import React,{useState} from 'react';
import { Form,Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Register = () => {

  const question =[{
    value:"What is your Nickname",
    label:"What is your Nickname"
  },
    {
      value:"Your first mobilenumber",
      label:"Your first mobilenumber"
    },
    {
      value:"Your Favorite place",
      label:"Your Favorite place"
    }
]
  const [firstName,setfirstName] = useState('')
  const [lastName,setlastName] = useState('')
  const [mobileNumber,setmobileNumber] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [securityQuestion,setsecurityQuestion] = useState(question[0].value)
  const [answer,setAnswer] = useState('')

  const User = {
    firstName,
    lastName,
    mobileNumber,
    email,
    password,
    securityQuestion,
    answer
  }
   const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/user/register',User).then(res=>{
      console.log(res.data)
      toast.success("Registered succesfully!You can login now")
      setAnswer('')
      setEmail('')
      setPassword('')
      setEmail('')
      setfirstName('')
      setlastName('')
      setmobileNumber('')
   
    }).catch(err=>{
      toast.error("Username Already Exist")
    })

  };

  return (
    <Container>
      <Row >
        <Col lg={6} md={6} sm={12} className='px-5  m-auto'>
          <h1 className='text-center text-white'><MdAccountCircle size={60} color='#8c14fc'/></h1>
          <h5 className='text-center'>Sign Up</h5>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3 ">
                <Col>
                <Form.Control  className='p-3'
                type="text" 
                name='firstName' 
                placeholder='First Name'
                required
                id="firstName"
                onChange={e=>setfirstName(e.target.value)}
                value={firstName}
                />
                </Col>
                <Col>
                <Form.Control  className='p-3'
                type="text" 
                name='lastName' 
                placeholder='last Name'
                required
                id="lastName"
                onChange={e=>setlastName(e.target.value)}
                value={lastName}
                />
                </Col>
              </Row>
              <Form.Control  className="mb-3 p-3"
                type="number" 
                name='mobileNumber' 
                placeholder='Mobile Number'
                required
                id="mobileNumber"
                onChange={e=>setmobileNumber(e.target.value)}
                value={mobileNumber}
                />
                <Row className="mb-3">
                <Col>
                <Form.Select className="p-3"
                id="securityQuestion"
                label="Security Question"
                onChange={e=>setsecurityQuestion(e.target.value)}
                value={securityQuestion}
                >
                {question.map((option) =>(
                  <option key={option.value} value={option.value}> {option.label}</option>
                ))}
                </Form.Select>
                </Col>
                <Col>
                <Form.Control className="p-3" 
                 required
                 id="asnwer"
                 name="asnwer"
                 type="text"
                 onChange={e=>setAnswer(e.target.value)}
                value={answer}
                placeholder='Answer'
                />
                </Col>
              </Row>
              <Form.Control  className="mb-3 p-3"
                type="email" 
                name='email' 
                placeholder='Enter email'
                required
                id="email"
                onChange={e=>setEmail(e.target.value)}
                value={email}
                />
                <Form.Control  className="mb-3 p-3"
                type="password" 
                name='password' 
                placeholder='Enter Password'
                required
                id="password"
                onChange={e=>setPassword(e.target.value)}
                value={password}
                />
                <Button className='w-100 p-3' type="submit" style={{backgroundColor:"#8c14fc"}}>Register</Button>
                  <ToastContainer autoClose={1000}/>
            </Form>
            <p className='text-center'>Already a user?<Link to="/login">Login</Link></p>
        </Col>
      </Row>      

    </Container>
  )
};

export default Register;
