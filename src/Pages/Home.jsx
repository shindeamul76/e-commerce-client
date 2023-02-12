import React from 'react'
import Annoncement from '../Diff_Component/Annoncement'
import Categories from '../Diff_Component/Categories'
import Footer from '../Diff_Component/Footer'
import Navbar from '../Diff_Component/Navbar'
import Newsletter from '../Diff_Component/Newsletter'
import Products from '../Diff_Component/Products'
import SliderDiv from '../Diff_Component/SliderDiv'

function Home() {
  return (
    <div>
     <Annoncement/>
     <Navbar/>
     <SliderDiv/>
     <Categories/>
     <Products/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default Home
