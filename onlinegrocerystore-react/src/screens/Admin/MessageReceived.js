import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table,Container} from 'react-bootstrap'


const MessageReceived = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/admin/messages').then(res=>{
            setData(res.data)
        })
    },[])
  return (
    <Container className="mt-4 text-center">
<h2 className='text-center'>Messages Received</h2>
<Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>Subject</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
    {data.map((o)=>(
        <tr key={o.id}>
        <td>{o.id} </td>
        <td>{o.email} </td>
        <td>{o.subject} </td>
        <td>{o.message} </td>
      </tr>
    ))}
  </tbody>
</Table>
    </Container>
  )
}
export default MessageReceived;