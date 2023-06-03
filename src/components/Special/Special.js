import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Special({ring}) {
  
  const giftRing = useContext(RingContext);
  console.log(giftRing);
  const [house,setHouse] = giftRing;

  const handleIncreseHouse = ()=>{
    // house,setHouse
    setHouse(house+1); 
  }

  return (
    <div>
        <h4>Special</h4>
        <p><small>Gift: {giftRing}</small></p>
        <button onClick={handleIncreseHouse}>Incresse House</button>
    </div>
     
  )
}

export default Special