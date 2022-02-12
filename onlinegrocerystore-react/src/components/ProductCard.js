import React from 'react';
import { Card,Button } from 'react-bootstrap';
import {useCart} from 'react-use-cart'
import {HiShoppingCart} from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({products}) => {
  const {addItem} = useCart()

  const addTocart =(products)=>{
    addItem(products)
    toast.success("Added to Cart!");
  }
  return (
    <>
      <Card style={{width:"16rem"}} key={products.name} className="m-2 shadow p-3 bg-white rounded">
        <Card.Img variant="top" src={products.image} style={{width:"200px",height:"200px"}} />
        <Card.Footer className="text-muted">
          <Card.Title>{products.name}</Card.Title>
          <Card.Title>Rs.{products.price}</Card.Title>
          <p>{products.active ? "In Stock":"Out of Stock"} </p>
          <Button variant="success" onClick={()=>addTocart(products)} disabled={!products.active}><HiShoppingCart size={20}/>Add to cart</Button>
          <ToastContainer autoClose={1000}/>
        </Card.Footer>
      </Card>
      
    </>
  );
};
export default ProductCard;