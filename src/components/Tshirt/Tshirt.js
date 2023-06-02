import React from 'react'

import './Tshirt.css'

function Tshirt({tshirt,handelAddToCart}) {

    // name": "Black",
    // "price": 24,
    // "comments": 
    const {name,picture,price,comments} = tshirt;

  return (
    <div className='t-shirt'>

        <img src={picture}></img>
        <h2>{name}</h2>
        <p>Price:{price}$</p>
        <p>Comment:{comments}</p>
        <button onClick={()=>handelAddToCart(tshirt)}>Buy This</button>

    </div>
  )
}

export default Tshirt