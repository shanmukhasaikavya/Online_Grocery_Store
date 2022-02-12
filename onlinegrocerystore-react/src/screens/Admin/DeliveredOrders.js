import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const DeliveredOrders = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/admin/delivered").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Container className="mt-5">
      <h2 className="text-center">Delivered Orders</h2>
      <Table striped bordered hover variant="light" responsive>
        <thead>
          <tr>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Order Date</th>
            <th>Expected Delivery Date</th>
            <th>Payment Method</th>
            <th>Status</th>
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
              <td className="text-success">{o.status} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DeliveredOrders;
