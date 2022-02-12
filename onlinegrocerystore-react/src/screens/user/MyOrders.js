import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

const MyOrders = () => {
  const [data,setData] = useState([])
  const email = localStorage.getItem('userToken')
  useEffect(()=>{
    axios.get(`http://localhost:8080/user/myorders/${email}`).then(res=>{
      console.log(res.data)
      setData(res.data)
    })
  })
  return (
    <Container className="mt-5 text-center">
      <h2 >My Orders</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Order Date</th>
            <th>Expected Delivery Date</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d)=>(
            <tr key={d.id}>
            <td>{d.id} </td>
            <td>{d.productName} </td>
            <td>{d.category} </td>
            <td>{d.productPrice}</td>
            <td>{d.qty}</td>
            <td>{d.cartTotal}</td>
            <td>{d.orderDate}</td>
            <td>{d.expectDate}</td>
            <td>{d.payment}</td>
            <td className={d.status==="cancelled" ? "text-danger":"text-success"}>{d.status}</td>
          </tr>
          ))}
          
        </tbody>
      </Table>
    </Container>
  );
};

export default MyOrders;
