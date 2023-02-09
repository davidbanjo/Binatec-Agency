import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import LeadCTA from '../../components/CTAs/LeadCTA'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <LeadCTA />
    </div>
  )
}

export default Home