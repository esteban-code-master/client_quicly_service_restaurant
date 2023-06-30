import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import menu_options from '../../../data/menu.json'
import Fallback from '../fallback/fallback'
import './menu.css'

const Menu = () => {
    const [animation,setAnimation] = useState(false)
    
    useEffect(()=>{
        const is_animation = sessionStorage.getItem('animation')
        if(is_animation !== '@animation'){
            setTimeout(() => {
                sessionStorage.setItem('animation', '@animation')
                console.log('none',animation)
                setAnimation(true)
            }, 1800)    

            return
        }

        setAnimation(true)
    },[animation])

    const menu_restautant = menu_options
    const color = () => {

        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";

        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }

        return color
    }
    
    return (
        <div className='container'>
            {/* <Taps /> */}
            {
                animation? 
                    <div className='menu-container'>
                    {
                        menu_restautant.map(( menu, index ) => [
                            <Link to='/detalle' className='menu' key={index} style={{ background: color() }}>
                                <img  
                                    className='menu-image' 
                                    alt=''
                                    src = {menu.image}
                                    width = {10}
                                    height = {10}
                                />
                                <span className='menu-name'>{ menu.name }</span>
                            </Link>
                        ])
                    }
                </div>:
                <Fallback />
            }
        </div>
    )
}

export default Menu