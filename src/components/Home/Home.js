import React, { useState } from 'react'

import { Link, useLoaderData } from 'react-router-dom'

import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

import './Home.css'


function Home() {

    const tshirts = useLoaderData();

    const [cart,setCart] = useState([])
    
    


    const handelAddToCart =(tshirt)=>{
        console.log(tshirt);

        const existCart = cart.find(res => res._id === tshirt._id)

        if(existCart){
            alert('Product already added');
        }
        else{
            const newCart=[...cart,tshirt];
            setCart(newCart);
            alert("Successfully added")
        }

    }

    const handleRemoveID=(tshirt)=>{
        console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id );
        setCart(remaining);

    }



    return (
        <div className="home-container">
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt handelAddToCart={handelAddToCart} key={tshirt._id} tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div className="card-container">
                <Cart handleRemoveID={handleRemoveID} cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Home