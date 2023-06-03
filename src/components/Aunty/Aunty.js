import React from 'react'
import Cousine from '../Cousine/Cousine'

function Aunty({house,ring}) {
  return (
    <div>
        <h4>Aunty</h4>
        <p><small> house:{house}</small></p>
        <section className='flex'>
          <Cousine ring={ring} house={house}></Cousine>
          <Cousine house={house}></Cousine>
        </section>
    </div>
  )
}

export default Aunty