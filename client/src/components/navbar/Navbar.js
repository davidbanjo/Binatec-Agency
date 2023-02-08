import React from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='firstHeaderLevel'>
          <div>
            {/* something soon/ */}
          </div>
          <div className='headerContactDetails'>
              <div className='socialIcons'>
                <BsWhatsapp className='headerIcons'/>
                <BsInstagram className='headerIcons'/>
                <BsLinkedin className='headerIcons'/>
              </div>
              <div className='phone'>
                <a className='phoneLink' href='tel:+2349066548044'>
                  <BsTelephone className='headerIcons'/>
                  <p className='tel'>+234-906 654 8044</p>
                </a>
              </div>
          </div>
        </div>
        <div className='secondHeaderLevel'>
          {/* <img className='' alt='' src=''></img> */}
          <h2>LOGO</h2>
          <nav>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
              </ul>
          </nav>
          <button className='primaryBtn'>
            <a href="mailto:binatecagency@gmail.com">
              GET A QUOTE
            </a>
          </button>
        </div>
    </div>
  )
}

export default Navbar