import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Special({ring}) {
  
  const giftRing = useContext(RingContext)

  return (
    <div>
        <h4>Special</h4>
        <p><small>Gift: {giftRing}</small></p>
    </div>
     
  )
}

export default Special