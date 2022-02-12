import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top rounded"
              alt='logo'
            />
          </Navbar.Brand>

          <Navbar.Brand >Online Grocery Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="addproduct">
              Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="allproductsandeditproducts">
              All Products & Edit Products
            </Nav.Link>
            <Nav.Link as={Link} to="messagesreceived">
              Messages Received
            </Nav.Link>
            <Nav.Link as={Link} to="ordersreceived">
              Orders Received
            </Nav.Link>
            <Nav.Link as={Link} to="cancelorders">
              Cancel Orders
            </Nav.Link>
            <Nav.Link as={Link} to="deliversorders">
              Delivers Orders
            </Nav.Link>
            <Nav.Link as={Link} to="logout">
              Logout
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};
export default AdminHeader;
