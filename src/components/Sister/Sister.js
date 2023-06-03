import React, { useContext } from 'react'
import { MoneyContext } from '../Grandpa/Grandpa'

function Sister({house}) {
  const money = useContext(MoneyContext);
  
  return (
    <div>
        <h4>Sister</h4>
        <p><small>house:{house}</small></p>
        <h5>Money:{money}</h5>
    </div>
  )
}

export default Sister