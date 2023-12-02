import React from 'react'
import { Card, Col, Row,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
    const wishListArray = useSelector((state)=>state.wishListReducer)
  const dispatch = useDispatch();

  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='ms-5' style={{ marginTop: '100px', marginBottom:'50px'}}>
                {
                    wishListArray?.length>0?wishListArray?.map((product,index)=>
                    <Col key={index} sm={12} md={6} lg={4} xl={3} className='mb-5'>
                    <Card className='shadow mb-5 rounded' style={{ width: '18rem',borderColor:'white', height: '30rem' }}>
                        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                        <Card.Body>
                        <Card.Title style={{ overflowY: 'hidden' }}>{product?.title}</Card.Title>
                            <Card.Text>
                                <p>{product?.description.slice(0,55)}...</p>
                                <h5>$ {product?.price}</h5>
                            </Card.Text>

                           <div className='d-flex align-items-center' style={{justifyContent:'space-between'}}>
                          
                           <Button className='btn btn-light' onClick={()=>handleWishlistCart(product)}><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>
                           <Button className='btn btn-light' onClick={()=>dispatch(removeFromWishList(product.id))}><i class="fa-solid fa-trash fa-2x text-danger"></i></Button>
                           </div>
                        </Card.Body>
                    </Card>             
                    </Col>
                    ):<div className='container d-flex justify-content-center align-items-center flex-column'>
                        <img src="https://media.giphy.com/media/U8MXoKqFlTtfsOYrnl/giphy.gif" alt="empty wish list image" className='mb-2' height={"200px"} style={{borderRadius:'50%'}}/>
                        <h3 className='text-danger' style={{overflowY:"hidden"}}>Wish List is empty!!!</h3>
                        <Link to={"/"}><Button className='btn btn-success mt-2'>Back to Home</Button></Link>
                      </div>
                }
            </Row>
    </div>
  )
}

export default Wishlist
