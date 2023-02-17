import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'
import Procedure from './Procedure'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Procedure />
        <Clients />
    </div>
  )
}

export default Home