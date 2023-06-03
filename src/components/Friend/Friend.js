import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Friend({ring}) {

  const giftRing = useContext(RingContext);
  const [house,sethouse] = giftRing;

  return (
    <div>
      Friend: {ring}
      <h4>{giftRing}</h4>
      <button onClick={()=>sethouse(house-1)}>Decrese</button>
    </div>

  )
}

export default Friend