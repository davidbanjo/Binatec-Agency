// import React, { useRef } from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./navbar.css"
import HomeDropDown from '../megaMenu/HomeDropDown'

const Navbar = () => {

  const [ fix, setFix ] = useState(false) 

  const setFixed = () => {
    if (window.scrollY >= 125) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  const [ mouseHover, setMouseOver ] = useState(false)

  // const dropDownRef = useRef(null)

  // useEffect(() => {
  //   dropDownRef.current.addEventListener("click", () => {
  //     setMouseOver(false)
  //   })
  // }, [])

  // const closeDropDown () => {
  //   setMouseOver(false)
  // }



  return (
    <div className={fix ? 'Navbar fixed' : 'Navbar'}>
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
          <h2>BINATEC</h2>
          <nav>
              <ul>
                <Link to="/" onMouseOver={() => setMouseOver(true)}>
                  <li>
                    HOME
                  </li>
                </Link>
                {mouseHover && (
                    <HomeDropDown onMouseLeave={() => setMouseOver(false)} /> 
                  )}
                <Link to="about">
                  <li>
                    ABOUT US
                  </li>
                </Link>
                <Link to="services">
                  <li>
                    SERVICES
                  </li>
                </Link>
                <Link to="portfolio">
                  <li>
                    PORTFOLIO
                  </li>
                </Link>
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