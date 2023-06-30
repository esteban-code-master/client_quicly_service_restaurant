import React, { useState } from 'react'
import { redirect } from "react-router-dom"
import shopcart from '../../../images/shopcart.png'
import './style.css'


const Shopcart = ({ countProduct = 0, name = '' }) => {

    const [count,setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount( count - 1)

    const saveBooking = () => {
        const item = JSON.parse(window.localStorage.getItem('item'))

        if(Array.isArray(item)){

            item.push({
                count: count,
                name: name
            })

            localStorage.setItem('item',JSON.stringify(item))
            window.location.href = '/shopcart'
            return
        }

        localStorage.setItem('item',JSON.stringify([{
            count: count,
            name: name
        }]))

        window.location.href = '/shopcart'
    }

    return (
       <React.Fragment>
            <div className='container'>
                <h1 class = 'title-detail'> Nombre de la comida</h1>
                <p className='description-detail'>
                    Nullam cursus lacinia erat. Vestibulum suscipit nulla quis orci. Fusce a quam. Morbi mollis tellus ac sapien. Praesent nonummy mi in odio.
                </p>
                <textarea placeholder='escribe tus comentarios'>
        
                </textarea>
                <div className = 'shopcart-action'>
                    <button onClick={decrement}> - </button>
                    <span> {count} </span>
                    <button onClick={increment}> + </button>
                </div>
                <button className='guardar' onClick={saveBooking}>
                    <img alt='' width={20} src={shopcart}/>
                   <span> Agrega al carrito</span>
                </button>
            </div>
       </React.Fragment>
    )
}

export default Shopcart