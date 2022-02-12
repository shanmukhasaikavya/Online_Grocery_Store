import axios from 'axios';
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductEditCard = ({products,history}) => {

  const deleteHandler = (id) =>{
    axios.delete(`http://localhost:8080/admin/product/${id}`).then(
      res=>{
        console.log(res.data)
        toast.success("Succesfully Deleted Product");
      }).catch(err=>{
        console.log(err)
        toast.error("Something Went Wrong!");
      })
  }
  return (
    <>
      <Card style={{width:"16rem"}} key={products.name} className="m-2">
        <Card.Img variant="top" src={products.image} style={{width:"200px",height:"200px"}} />
        <Card.Footer className="text-muted">
          <Card.Title>{products.name}</Card.Title>
          <Card.Title>Rs.{products.price}</Card.Title>
          <p>{products.active ? "In Stock ":"Not in Stock"} </p>
          <Button variant="success" onClick={()=>history.push(`productcategory/${products.id}`)}>
            Edit <AiFillEdit size={20}/>
          </Button>
          <Button variant="danger m-2" onClick={()=>deleteHandler(products.id)} >
            Delete <AiFillDelete size={20}/>
          </Button> 
        </Card.Footer>
        <ToastContainer autoClose={3000}/>
        
      </Card>
    </>
  );
};
export default ProductEditCard;