import React from 'react'
import "./styles/heroSection.css"
import InputWebsite from '../../components/CTAs/InputWebsite'
import { BsFillPlayCircleFill } from "react-icons/bs"
import Cursor from '../../components/cursor/Cursor'

const HeroSection = (props) => {

  

  return (
    <div className='hero'>
        <Cursor textEnter={props.textEnter} textLeave={props.textLeave} />
        {/* <h2 className='sectionPlaceholder'>HERO SECTION</h2> */}
        <h1 className='siteTitle' onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>ELEVATE YOUR DIGITAL<br /> PRESENCE WITH<br/> OUR CREATIVE<br/> DESIGN & MARKETING<br/> EXPERTISE</h1>
        <p className='siteDesc'>We are BINATEC. We love building great brands and digital experiences.</p>
        <div className='sideTextContainer'>
          <h2 className='sideText'>HELLO</h2>
          <div className='playIconContainer'>
            <a href='/'>
              <BsFillPlayCircleFill className='playICon'/>
            </a>
          </div>
        </div>
        <div className='leadsGenerated'>
          5000+ <br />LEADS <br />GENERATED
        </div>
        <div className='leadsGenerated clientsGenerated'>
          100+ <br />CLIENTS
        </div>
        <InputWebsite />
    </div>
  )
}

export default HeroSection