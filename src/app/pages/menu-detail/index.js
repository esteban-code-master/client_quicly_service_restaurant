import React, { useState } from 'react'
import './style.css'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Shopcart from '../category';
import Grid from '@mui/material/Grid'
import Taps from '../../shared/component/taps'
import Rating from '@mui/material/Rating'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MenuDetail = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
    const [transferData,setTrasferData] = useState({
        countProduct: 0, 
        name: ''
    })

    return (
       <React.Fragment>
            <SwipeableDrawer
                anchor='bottom'
                open= {openDrawer}
                onClose = {()=> setOpenDrawer(false)}
                onOpen = {()=> setOpenDrawer(true)}
            >
               <Shopcart countProduct={transferData.countProduct} name={transferData.name}/>
            </SwipeableDrawer>

            <Taps />
            <div className='container'>
                {
                    [...Array(12).keys()].map(()=>[
                        <div 
                            className='menu-detail background' 
                            onClick={()=> {
                                setTrasferData({
                                    countProduct: 0,
                                    name: 'buffet de res'
                                })
                                setOpenDrawer(true)
                            }}
                        >
                            <div className='meu-detail-content'>
                                <div className='promo'>
                                    - 15%
                                </div>
                                <Grid container spacing={2} alignItems='center'>
                                    <Grid item xs={4}>
                                        <div className='menu-detail-image'>
                                            <img alt='' src='https://tofuu.getjusto.com/orioneat-prod-resized/PfFyHfd4AM98GpDnB-1200-1200.jpeg' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <span>
                                            <div className= 'menu-detail-title'>Buffeet de res</div>
                                            <Rating size="small"  name="read-only" value={5} readOnly />
                                        </span>
                                        <Grid item xs={12}>
                                            <div className='menu-detail-price'>
                                                <LocalAtmIcon />
                                                <span>$400 MXN</span>
                                            </div>
                                            <div  className='menu-detail-time'>
                                                <AccessTimeIcon />
                                                <span>24 Min</span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    ])
                }
            </div>
       </React.Fragment>
    )
}

export default MenuDetail