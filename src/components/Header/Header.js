import React from 'react'
import { Link } from 'react-router-dom'


import './Header.css'

function Header() {
    return (
        <nav className='Header'>
            <Link to='/'>Home</Link>
            <Link to='/Orders'>Order</Link>
            <Link to='/About'>About</Link>
            <Link to='/Grandpa'>Grandpa</Link>

        </nav>
    )
}

export default Header