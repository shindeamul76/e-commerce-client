import React from 'react'

import { BrowserRouter, Routes,  Route } from 'react-router-dom';


import Home from "./Pages/Home"
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Cart from './Pages/Cart';


const App = () => {
    return (
        <>
            <BrowserRouter>
           
                    <Routes>
                        <Route  path='/' exact  element={<Home/>} />
                        <Route path='/product' element={<ProductList/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/cart' element={<Cart/>} />
                    </Routes>
           
            </BrowserRouter>

        </>
    )
}

export default App
