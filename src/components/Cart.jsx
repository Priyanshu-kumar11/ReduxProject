import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cart = () => {
   
  const products = useSelector(state => state.cart);
  
  
  const cards = products.map((product) => (
    <div key={product.id} className='col-md-12' style={{ marginBottom: '10px' }}>
      <Card className='h-100'>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="danger">Remove item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  

  return (
    <>
     <div className="row">
      {cards}
     </div>
    </>
  )
}

export default Cart