import React from 'react'
import './style.css'

const OfferPages = () => {

    return (
        <div className='banner-container'>
            <h1 className='banner-text'>Ofertas del dia</h1>
            {
                  [...Array(12).keys()].map(()=>[
                    <img 
                    className='banner'
                    alt='' 
                    src='https://www.movilexito.com/sites/default/files/2022-09/Mo%CC%81vil%20E%CC%81xito%20-%20Ofertas%20para%20video%20-%20Datos%20x2%20Paquete%2035000%20Banner%20Desktop....jpg' />
                  ])
            }
        </div>
    )
}

export default OfferPages