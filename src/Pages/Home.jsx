import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { fetchProducts } from '../redux/slices/allProductsSlice';

function Home() {
    const {loading,allProducts,error} = useSelector((state)=>state.allProductsSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
  return (
    <>
      <div className="homeContainer">
      <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            loading && <div>
           <Spinner animation="border" variant="info"/>
                <span className="ms-2">Loading...</span>
          
            </div>
        }
    </div>

    <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        {
            !loading && error? <div>   
                <span className="fw-bolder text-danger">{error}</span>
             </div>:null
        }
    </div>
        <Row className="mt-5">
        {allProducts?.length > 0 ? allProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card
                className="product-card"
                style={{ width: "300px", borderRadius: "20px" }}
              >
                <Card.Img
                  variant="top"
                  style={{ overflowY: "hidden", borderRadius: "20px" }}
                  height={"286.094px"}
                  width={"300px"}
                  src={product?.thumbnail}
                />
              </Card>
              <div className="text-dark product-details">
                <div>{product?.brand}</div>
                <div
                  style={{
                    overflowY: "hidden",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {product?.title.slice(0, 20)}
                </div>
                <div className="font-style">
                  {" "}
                  <span style={{ color: "black" }}>
                    $ {product?.price} USD
                  </span>{" "}
                  
                  
                </div>
                <div className='d-flex justify-content-between'>
                   <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>
                   <Button className='btn btn-light' onClick={()=>dispatch(addToWishList(product))}>
                   <i className='fa-solid fa-heart fa-2x text-dark'></i></Button>
                  </div>
              </div>
          </Col>
        )):<p>Nothing to display</p>
        }
        </Row>
      </div>
    </>
  );
}

export default Home
