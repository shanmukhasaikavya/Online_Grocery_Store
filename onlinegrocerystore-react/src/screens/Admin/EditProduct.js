import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
const EditProduct=({match,history})=>{
    const id = match.params.id
    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/products/${id}`).then(
            res=>{
                setName(res.data.name)
                setCategory(res.data.category)
                setImage(res.data.image)
                setPrice(res.data.price)
                setActive(res.data.active)
            }
        )
    },[id])
    const pcategory = [
      {
        value: "vegetable",
        label: "Vegetables",
      },
      {
        value: "fruit",
        label: "Fruit",
      },
      {
        value: "Dairy and Backery",
        label: "Dairy and Backery",
      },
      {
        value: "Snacks and Branded Foods",
        label: "Snacks and Branded Foods",
      },
      {
        value: "Beverages",
        label: "Beverages",
      },
      {
        value: "Personal Care",
        label: "Personal Care",
      },
      {
        value: "Home Care",
        label: "Home Care",
      },
      {
        value: "Baby Care",
        label: "Baby Care",
      },
    ];
    const pprice =[{
      value:true,
      label:"YES"
    },
      {
        value:false,
        label:"NO"
      }]
   
      const [name,setName]=useState('')
      const [category,setCategory]=useState(pcategory[0].value)
      const [price,setPrice]=useState('')
      const [active,setActive]=useState(false)
      const [image,setImage]=useState('')
      const Product ={name,category,price,active,image}


const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8080/admin/product/${id}`,Product).then(res=>
        {
          console.log(res.data);
          history.push('/admin/productcategory')
        }).catch(err=>{
          console.log(err)
        })
}

  return <div>
      <Container>
      <Row >
        <Col lg={6} md={6} sm={12} className='p-5 m-auto'>
          <h5 className='text-center'>Edit Product</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Control  className="mb-3 p-3"
                type="name" 
                name='name' 
                placeholder='Product Name'
                required
                id="name"
                onChange={e=>setName(e.target.value)}
                value={name}
               
                />
                 <Form.Select className="mb-3 p-3"
                id="category"
                label="Category"
                onChange={e=>setCategory(e.target.value)}
                value={category}
                >
                {pcategory.map((option) =>(
                  <option key={option.value} value={option.value}> {option.label}</option>
                ))}
                </Form.Select>
                <Form.Control  className="mb-3 p-3"
                type="price" 
                name='price' 
                placeholder='Enter Price'
                required
                id="price"
                onChange={e=>setPrice(e.target.value)}
                value={price}
               
                />

                <Form.Select className="mb-3 p-3"
                id="active"
                label="Active"
                onChange={e=>setActive(e.target.value)}
                value={active}
                >
                {pprice.map((option) =>(
                  <option key={option.value} value={option.value}> {option.label}</option>
                ))}
                </Form.Select>

<Form.Control  className="mb-3 p-3"
                type="imgurl" 
                name='imgurl' 
                placeholder='Enter img url'
                required
                id="imgurl"
                onChange={e=>setImage(e.target.value)}
                value={image}
                />
                <Button className='w-100 p-3' type="submit" style={{backgroundColor:"#8c14fc"}}>Update</Button>
            </Form>
         
        </Col>
      </Row>
     
    </Container>
  </div>;
};

   

export default EditProduct;