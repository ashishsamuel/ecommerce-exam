import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
    const cartListArray = useSelector((state=>state.cartReducer))
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  const getCartTotal=()=>{
    if(cartListArray.length>0){
      setTotal(cartListArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order successfully places ... Thankyou for purchasing with us!!!")
    navigate('/')
  }

  useEffect(()=>{
    getCartTotal()
  },[cartListArray])
  return (
    <div className='container' style={{marginTop:'100px'}}>
    {
    
      cartListArray?.length>0?
      <div className="row mt-5">
      <div className='col-lg-7 mb-5'>
        <table className='table shadow border rounded'>
        <thead className='m-1'>
          <th>#</th>
          <th>Product Name</th>
          <th>Product brand</th>
          <th>Product image</th>
          <th></th>
        </thead>
        
     
          <tbody className='m-1'>
          {
        cartListArray?.map((product,index)=>
           <tr key={index}>
             <td>{index+1}</td>
             <td>{product.title}</td>
             <td>{product.brand}</td>
             <td><img height={'100px'} src={product.thumbnail} alt="" /></td>
             <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}> <i className="fa-solid fa-trash"></i></button></td>
           </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-4 mb-5">
        <div className="border p-3 rounded shadow">
          <h1 className="text-primary" style={{overflowY:'hidden'}}>Cart Summary</h1>
          <h4 className="mt-3" style={{overflowY:'hidden'}}>Total Products : <span>{cartListArray.length}</span></h4>
          <h4 style={{overflowY:'hidden'}}>Total : <span className="text-danger fw-bolder fs-2">$ {total}</span></h4>
          <button onClick={handleCart} className='btn btn-success'>Check out</button>
        </div>
      </div>
      </div>:
      <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
      <img height={'250px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
      <h3 className='fw-bolder mt-3 fs-1 text-warning'> Your Cart is Empty!!!</h3>
      <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'} >Back to Home</Link>
    </div>

}
   </div> 
  )
}

export default Cart
