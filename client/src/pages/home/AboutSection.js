import React from 'react'
import "./styles/aboutSection.css"
import LeadCTA from '../../components/CTAs/LeadCTA'

const AboutSection = () => {
  return (
    <div className='hero aboutSection'>
        <h2 className='sectionPlaceholder'>AboutSection</h2>
        <h3 className='subheadline'>Take your website to the next level</h3>
        <LeadCTA />
    </div>
    
  )
}

export default AboutSection