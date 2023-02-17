// import React, { useRef } from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./navbar.css"
import HomeDropDown from '../megaMenu/HomeDropDown'
import ServicesDropdown from "../megaMenu/ServicesDropdown"

const Navbar = () => {

  // const [ fix, setFix ] = useState(false) 

  // const setFixed = () => {
  //   if (window.scrollY >= 75) {
  //     setFix(true)
  //   } else {
  //     setFix(false)
  //   }
  // }

  // window.addEventListener("scroll", setFixed)

  const [ mouseHover, setMouseOver ] = useState(false)
  const [ servicesMouseHover, setServicesMouseOver ] = useState(false)

  // const dropDownRef = useRef(null)

  // useEffect(() => {
  //   dropDownRef.current.addEventListener("click", () => {
  //     setMouseOver(false)
  //   })
  // }, [])

  // const closeDropDown () => {
  //   setMouseOver(false)
  // }

  const handle_mouse_leave = (e) => {
    if(servicesMouseHover && e.contains(document.querySelector("#dropdown"))) {
      return null;
    }
    else {
      setServicesMouseOver(false);
    }
  }



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
                <li id="list" onMouseOver={() => setServicesMouseOver(true)} onMouseLeave={(e) => handle_mouse_leave(e)}>
                  <Link to="services">
                      SERVICES
                  </Link>
                {servicesMouseHover && (
                    <ServicesDropdown onMouseLeave={() => setServicesMouseOver(false)} /> 
                  )}
                </li>
                <Link to="portfolio">
                  <li>
                    PORTFOLIO
                  </li>
                </Link>
              </ul>
          </nav>
          <a className="primaryBtnContainer" href="mailto:binatecagency@gmail.com">
            <button className='primaryBtn'>
              GET A QUOTE
            </button>
          </a>
        </div>
    </div>
  )
}

export default Navbar