import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import menu_options from '../../../../data/menu.json'
import './style.css'

const Taps = () => {
    const [menu] = useState(menu_options)

    return (
        <Tabs variant="scrollable">
            {
                menu?
                    menu.map(( item, key )=> [
                        <Tab 
                            value={key}
                            label =  { item.name }
                            icon = {
                                <img width={30} height={30} className = 'tabs-item' alt={item.name} src={item.image}/>
                            }
                        />
                    ])
                : []
            }
        </Tabs>
    )
}

export default Taps