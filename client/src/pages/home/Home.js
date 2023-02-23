import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'
import Procedure from './Procedure'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Procedure />
        <Clients />
        <Contact />
    </div>
  )
}

export default Home