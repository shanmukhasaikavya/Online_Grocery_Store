import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

 const OrderReceived = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/admin/orders").then((res) => {
      setData(res.data);
    });
  }, [data]);

  const handleCancel = (id) => {
    console.log(id);
    axios.put(`http://localhost:8080/admin/order/cancel/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  const handleDeliver = (id) => {
    console.log(id);
    axios.put(`http://localhost:8080/admin/order/deliver/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <Container fluid className="mt-5 text-center">
      <h2>All Orders</h2>
      <Table striped bordered hover variant="light" responsive>
        <thead>
          <tr>
            <th>MobileNumber</th>
            <th>Address</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>OrderDate</th>
            <th>Expected DeliveryDate</th>
            <th>PaymentMethod</th>
            <th>Status</th>
            <th>CancelOrders</th>
            <th>DeliverOrder</th>
          </tr>
        </thead>
        <tbody>
          {data.map((o) => (
            <tr key={o.id}>
              <td> {o.mobileNumber} </td>
              <td>{o.address} </td>
              <td>{o.productName} </td>
              <td> {o.qty} </td>
              <td>{o.cartTotal} </td>
              <td>{o.orderDate} </td>
              <td>{o.expectDate} </td>
              <td>{o.payment} </td>
              <td>{o.status} </td>
              <td>
                <Button variant="danger" onClick={() => handleCancel(o.id)}>
                  Cancel
                </Button>
              </td>
              <td>
                <Button variant="success" onClick={() => handleDeliver(o.id)}>
                  Delivered
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default OrderReceived