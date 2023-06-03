import React, { useState } from 'react'

import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const RingContext = React.createContext('Matir Ring');

export const MoneyContext = React.createContext(0);

function Grandpa() {

  // const house = 7;

  const ring = "Diamond Ring";

  const [house, setHouse] = useState(1);

  const [money, setMoney] = useState(555);

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={money}>
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
      </MoneyContext.Provider>
    </RingContext.Provider>
  )
}

export default Grandpa