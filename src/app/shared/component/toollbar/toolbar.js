import React from 'react'
import  { Link } from 'react-router-dom'
import home_icon from '../../../../images/icons/home.svg'
import form_icon from '../../../../images/icons/form.svg'

import './style.css'

const Toollbar = () => {
    return (
        <div className='tollbar'>
            <Link className='tollbar-item' to= "/">
                <img alt='button icon home' src = {home_icon} width= {40} />
            </Link>

            <Link className='tollbar-item' to= "/contact-us">
                <img alt='button icon home' src='http://localhost:3000/images/service.svg' width= {40}/>
            </Link>

            <Link className='tollbar-item' to= "/offer">
                <img alt='button icon home' src='http://localhost:3000/images/offer.svg' width= {40}/>
            </Link>

            <Link className='tollbar-item' to= "/shopcart">
                <img alt='button icon home' src='http://localhost:3000/images/status.svg' width= {40}/>
            </Link>

            <Link className='tollbar-item' to= "/shopcart">
                <img alt='button icon home' src='http://localhost:3000/images/phone.svg' width= {40}/>
            </Link>

            {/* <Link className='tollbar-item' to= "/">
                <img alt='button icon home' src={form_icon} width= {40}/>
            </Link> */}
        </div>
    )
}

export default Toollbar