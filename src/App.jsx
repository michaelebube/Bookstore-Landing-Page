import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Catalog from './components/Catalog'
import Purchase from './components/Purchase'
import AboutCEO from './components/AboutCEO'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Purchase/>
      <AboutCEO/>
      <Footer/>
     </div>

    </>
   
  )
}

export default App
