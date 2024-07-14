import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container" >
        <Title subTitle='OUR FEATURES' title='Service We Provide'/>
        <Features/>
        <About/>
      </div>
    </div>
  )
}

export default App
