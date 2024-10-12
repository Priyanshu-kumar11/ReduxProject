import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';

const Product = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // API call to fetch products
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result));
  }, []);

  const addToCart = (product) => {
    // Dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className='col-md-3 mb-4' style={{ marginBottom: '10px' }}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="row justify-content-center">Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
