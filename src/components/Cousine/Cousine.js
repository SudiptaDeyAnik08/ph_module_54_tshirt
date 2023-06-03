import React from 'react'
import Friend from '../Friend/Friend'

function Cousine({house,ring}) {
  return (
    <div>
        <h4>Cousine</h4>
        <p><small>house:{house}</small></p>
        <section>
            <Friend ring={ring}></Friend>
        </section>
    </div>
  )
}

export default Cousine