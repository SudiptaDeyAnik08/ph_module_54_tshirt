import React from 'react'
import Cousine from '../Cousine/Cousine'

function Aunty({house}) {
  return (
    <div>
        <h4>Aunty</h4>
        <p><small>{house}</small></p>
        <section className='flex'>
          <Cousine></Cousine>
          <Cousine></Cousine>
        </section>
    </div>
  )
}

export default Aunty