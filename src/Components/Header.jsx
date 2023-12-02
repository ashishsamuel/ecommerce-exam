import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'
import { searchProduct } from '../redux/slices/allProductsSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch()

  return (
    <>
        <Navbar expand="lg" className="shadow nav-bgcolor navbar-style position-fixed">
                <Container  style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Navbar.Brand>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <h5 className='text-dark' style={{overflowY:'hidden'}}>FinStore</h5>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='option-list'>

                        <Nav>


                            <Form className="d-flex search-field">
                            <input type="text" className='form-control border rounded me-2'  onChange={(e)=>dispatch(searchProduct(e.target.value))}
                                    style={{ width: '450px',backgroundColor:'ghostwhite' }} placeholder='Search for Products'/>
                                <Button style={{marginLeft:'-58px'}} className='search-button'><i class="mt-1 fa-solid fa-magnifying-glass"></i></Button>
                            </Form>

                            <Nav.Link className='btn rounded link-style'>
                                <Link to={'/wishlist'} className='d-flex align-item-center link-items' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    Wishlist
                                    <i className='fa-solid fa-heart text-danger ms-2 mt-1'>
                                    </i>
                                    
                                </Link>
                            </Nav.Link>

                            <Nav.Link className='btn rounded link-style'>
                                <Link to={'/cart'} className='d-flex align-item-center link-items' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                                    
                                    Cart
                                    <i className='fa-solid fa-cart-shopping text-warning ms-2 mt-2'>
                                    </i>
                                    
                                </Link>
                            </Nav.Link>
                            {/* <Nav.Link>
                                <Button variant="info" className='text-dark fw-bold'>Cart
                                    <i className="fa-solid fa-cart-shopping cart-icon mx-1">
                                        <Badge className='badge-count text-dark bg-transparent'>2</Badge>
                                    </i>
                                </Button>
                            </Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
 
    </>
  )
}

export default Header
