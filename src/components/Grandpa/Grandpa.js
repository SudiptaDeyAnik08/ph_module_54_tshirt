import React from 'react'

import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const RingContext = React.createContext('Matir Ring');

function Grandpa() {

  const house = 7;

  const ring = "Diamond Ring";


  return (
    <RingContext.Provider value='Gold Ring'>
      <div className='grandpa'>
        Grandpa
        <p><small>Had House: {house}</small></p>
        <p><small>Had Ring for Gift: {ring}</small></p>


        <section className='flex'>
          <Father house={house} ring={ring}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house} ring={ring}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  )
}

export default Grandpa