import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Friend({ring}) {

  const giftRing = useContext(RingContext)

  return (
    <div>
      Friend: {ring}
      <h4>{giftRing}</h4>
    </div>

  )
}

export default Friend