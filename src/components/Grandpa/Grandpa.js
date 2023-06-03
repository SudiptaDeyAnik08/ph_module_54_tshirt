import React from 'react'

import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

function Grandpa() {

    const house = 7;


  return (
    <div className='grandpa'>
        Grandpa
        <p><small>Had House: {house}</small></p>

        <section className='flex'>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
        </section>
    </div>
  )
}

export default Grandpa