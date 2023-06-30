import React, { Suspense } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Menu = React.lazy(()=> import('../pages/menu'))
const MenuDetail = React.lazy(()=> import('../pages/menu-detail'))
const Template = React.lazy(()=> import('../shared/template/template'))
const PagesContactUs = React.lazy(()=> import('../pages/contact_us'))
const Shopcart = React.lazy(()=> import('../pages/shopcart'))
const OfferPages = React.lazy(()=> import('../pages/offer'))

const AppRouting = () => {

    return (
        <Suspense>
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path = '/' element = { <Menu /> } />
                        <Route path = '/contact-us' element = { <PagesContactUs /> } />
                        <Route path = '/detalle' element = { <MenuDetail /> } />
                        <Route path = '/shopcart' element = { <Shopcart /> } />
                        <Route path = '/offer' element = { <OfferPages /> } />
                    </Routes>
                </Template>
            </BrowserRouter>
        </Suspense>
    )
}


export default AppRouting