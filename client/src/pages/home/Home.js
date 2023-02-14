import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'
import Procedure from './Procedure'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Procedure />
        <Clients />
        <Footer />
    </div>
  )
}

export default Home