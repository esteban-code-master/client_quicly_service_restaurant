import React, { useState } from 'react'
import './style.css'

const Shopcart = () => {
    const [item] = useState(window.localStorage.getItem('item')? JSON.parse(window.localStorage.getItem('item')) : [])
    

    const save= () =>{
        localStorage.clear()
        window.location.href = '/'
    }
    return (
        <div className='shopcart'>
            {
                item.map((element, key)=> [
                    <div key={key} className = 'shopcart-item'>
                        <div className='shopcart-title'>{element.name}</div>
                        <div  className='icon-shopcart'>
                            <div>{element.count}</div>
                            <div>
                                <img alt='' width={20} src= 'http://localhost:3000/images/delete.svg'></img>
                            </div>
                        </div>
                    </div>
                ])
            }

                <button className='ordenar' onClick={save}>
                    Ordenar
                </button> 
        </div>
    )
}

export default Shopcart