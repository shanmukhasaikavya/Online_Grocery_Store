import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { AiFillEdit, AiOutlineLogout, AiOutlineMessage, AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {MdCancel, MdDeliveryDining, MdOutlineAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {

  const [auth, setAuth] = useState(false);
  const [userAuth, setUserAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token === "admin@gmail.com") {
      console.log(true);
      setAuth(true);
      setUserAuth(false);
    }
    if (localStorage.getItem("userToken")) {
      setUserAuth(true);
      setAuth(false);
    }
  }, []);

  const adminLogout = () =>{
    localStorage.removeItem("adminToken")
    window.location='/login'
  }
  const userLogout = () =>{
    localStorage.removeItem("userToken")
    window.location='/login'
  }
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to={auth ? "/admin" : userAuth ? "productcategory" : ""}>
          <img
            src="https://image.freepik.com/free-vector/green-supermarket-corporate-identity-logo-template_23-2148453180.jpg?w=740"
            width="30"
            height="30"
            className="d-inline-block align-top rounded"
            alt="Online Grocery Store"
          />
          Online Grocery Store
        </Navbar.Brand>
        <Nav className="mr-auto">
          {auth ? (
            <>
              <Nav.Link as={Link} to="/admin/addproduct">
                Add  Product<MdOutlineAddCircleOutline size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/productcategory">
                All Products & Edit Products <AiFillEdit size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/messages">
                Messages Received <AiOutlineMessage size={20}/>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/orders">
                Orders Received <AiOutlineUnorderedList size={20}/>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/cancelorders">
                Canceled Orders <MdCancel size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/deliverorders">
                Delivered Orders <MdDeliveryDining size={20} />
              </Nav.Link>
              <Nav.Link onClick={()=>adminLogout()}>
                Logout<AiOutlineLogout size={20} />
              </Nav.Link>
            </>
          ) : userAuth ? (
            <>
              <Nav.Link as={Link} to="/user/productcategory">
                
                ProductCategory<BiCategory size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/user/cart">
                MyCart  <AiOutlineShoppingCart size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/user/myorders">
                MyOrders <AiOutlineUnorderedList size={20}/>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/message">
                  MessageUs  
                <AiOutlineMessage size={20}/>
              </Nav.Link>
              <Nav.Link as={Link} to="/user/changepassword">
                ChangePassword<AiFillEdit size={20}/>
              </Nav.Link> 
              <Nav.Link onClick={()=>userLogout()}>
                Logout<AiOutlineLogout size={20} />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
