import React from 'react'
import Slider from '../components/Slider'
import Features from '../components/Features'
import About from '../components/About'
import Professional from '../components/Professional'
import Services from '../components/Services'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Info from '../components/Info'

function Home() {
  return (
    <>
      <Slider />
      <Features />
      <About />
      <Professional /> 
      <Services />
      {/* <Client />  */}
      {/* <Contact /> */}
      <Info />
    </>

  )
}

export default Home