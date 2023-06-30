import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import pages_icon from '../../../../images/icons/tacos.svg'
import shopping_cart_icon from '../../../../images/free_icon_1.svg'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className='navbar-logo'>
                <img width={20} alt='' src={pages_icon}/>
                <span>Los tarascos</span>
            </div>
            <Link to='/shopcart' className='navbar-count'>
                <img alt='' src= {shopping_cart_icon} />
            </Link>
        </div>
    )
}

export default Navbar