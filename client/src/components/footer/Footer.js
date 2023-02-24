import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import { BsDribbble, BsEnvelope, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='hero footerContainer'>
        <div className='footerCTA'>
          <h2>LET'S <span className='white'>DISCUSS</span><br /> YOUR IDEAS</h2>
          <div className='footerCTABtns'>
            <button className='primaryBtn whiteBtn'><strong>DISCUSS NOW</strong></button>
            <button className='primaryBtn whiteOutlineBtn'><strong>FOLLOW US</strong></button>
            {/* <div>
              <p>
                <span>FREE</span>
                SITE AUDIT
              </p>
            </div> */}
          </div>
        </div>
        <div className='footerCont'>
          <div className='footer'>
            <h2 className='footerLogo'>BINATEC</h2>
            <p>All Rights Reserved</p>
            <div className='socials'>
              <BsInstagram className='BsInstagram headerIcons'/>
              <BsLinkedin className='BsLinkedin headerIcons' />
              <BsTwitter className='BsTwitter headerIcons'/>
              <BsDribbble className='BsDribble headerIcons'/>
              <BsWhatsapp className='BsWhatsapp headerIcons'/>
              <BsEnvelope className='BsEnvelope headerIcons'/>
            </div>
          </div>
          <div className='termsCont'>
            <Link to='terms'>Terms and Conditions Apply</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer