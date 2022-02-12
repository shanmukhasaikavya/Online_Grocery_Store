import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import {AiFillDelete, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const Cart = ({ history }) => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <>
        <div class="text-center mt-3">
          <div class="col-lg-12">
          <img
              src={require("../../images/emptycart.png")}
              className="img-fluid"
              alt="emptycart"
            />
            <h5>Your Cart is Empty</h5>
            <Button className="shadow-lg p-2 mt-3 bg-white rounded" style={{backgroundColor:"white",color:"black"}} onClick={()=>history.push('/user/productcategory')}>Contine Shopping</Button>
          </div>
        </div>
      </>
    );
  return (
    <Container className="mt-4">
      <h2 className="text-center">My Cart</h2>
      <Row className="justify-content-center">
        <Col>
          <Table striped>
            <thead>
              <tr>
                <th className="text-center" colSpan={2}>
                  Name
                </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      style={{ height: "6rem" }}
                      alt="item"
                    />
                  </td>
                  <td>{item.name} </td>
                  <td>Rs.{item.price} </td>
                  <td> [{item.quantity}]</td>
                  <td>
                    <Button
                      className="btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                     <AiOutlineMinus/>
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                     <AiOutlinePlus />
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col>
              {" "}
              <h2 className="m-auto">Total Price Rs. {cartTotal}</h2>
            </Col>

            <Col className="d-flex justify-content-around">
              <Button className="btn btn-danger" onClick={() => emptyCart()}>
                Clear cart
              </Button>
              <Button
                className="btn btn-success"
                onClick={() => history.push("cart/proceed")}
              >
                Proceed to checkout
              </Button>
            </Col>
          </Row>
          <h6>Cart :[{totalUniqueItems}]</h6>
          <h6>Total Items :[{totalItems}]</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
