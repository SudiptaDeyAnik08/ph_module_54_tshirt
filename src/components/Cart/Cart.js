import React from 'react'

import './Cart.css';

function Cart({cart,handleRemoveID}) {

    let massage;
    
    if(cart.length === 0){
        massage = <p>Please Bye at least one massage..!</p>
    }
    else if(cart.length === 1){
        massage = <div>
            <p>Amr jonno ekta naw</p>
            <p>Nijer jonno ekta naw</p>
            <p><small>Amr jonno ar ekta naw.Please....!</small></p>
        </div>
    }
    else{
        massage = <p>Thanks for buying</p>
    }

  return (
    <div className='cart'>
        <h3 className={cart.length === 1 ? `orange`:`blue`}>Order Summary</h3>
        <h5>Order Quantity: {cart.length}</h5>
        {
            cart.map(res => <p key={res._id}> {res.name} <button onClick={()=>handleRemoveID(res)}>X</button></p> )
        }
        {
            massage
        }
        {
            cart.length === 3 ? <p>Thansk you thank you</p> : <p></p>
        }
        {
            cart.length === 2 && <h1>You buyed two items</h1>
        }
        {
            cart.length === 3 || <h1>Keep going </h1>
        }
    </div>
  )
}

export default Cart