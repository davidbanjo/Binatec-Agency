// import React, { useRef } from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./navbar.css"
import HomeDropDown from '../megaMenu/HomeDropDown'
import ServicesDropdown from "../megaMenu/ServicesDropdown"
import Cursor from "../cursor/Cursor"

const Navbar = () => {

  // const [ fix, setFix ] = useState(false) 

  // const setFixed = () => {

  //   let fixedHeader = document.querySelector(".secondHeaderLevel")

  //   if (window.scrollY >= 48) {
  //     // fixedHeader.classList.add("navbarFixed")
  //     console.log("youre over 48 pixels")
  //   }
  // }

  // useEffect(() => {
    
  // }, [])

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

  // const handle_mouse_leave = (e) => {
  //   if(servicesMouseHover && document.querySelector("nav").contains("#dropdown")) {
  //     return null;
  //   }
  //   else {
  //     setServicesMouseOver(false);
  //   }
  // }




  return (
    <div className='Navbar' >
        <div className='secondHeaderLevel'>
          {/* <img className='' alt='' src=''></img> */}
          <h2>BINATEC</h2>
          <nav>
              <ul>
                <li onMouseOver={() => setMouseOver(true)} onMouseLeave={() => {
                  setTimeout(() => {
                    setMouseOver(false)
                  }, 1500);
                  }} >
                  <Link to="/">
                    HOME
                  </Link>
                {mouseHover && (
                  <HomeDropDown /> 
                )}
                </li>
                <Link to="about">
                  <li>
                    ABOUT US
                  </li>
                </Link>
                <li id="list" onMouseOver={() => setServicesMouseOver(true)} onMouseLeave={() => {
                  setTimeout(() => {
                    setServicesMouseOver(false)
                  }, 1500);
                }}>
                  <Link to="services">
                      SERVICES
                  </Link>
                {servicesMouseHover && (
                    <ServicesDropdown /> 
                  )}
                  <Cursor />
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
              <strong>
                GET A QUOTE
              </strong>
            </button>
          </a>
        </div>
        <div className='socialIcons'>
          <a href="https://wa.link/gmw1no" title="whatsapp">
            <BsWhatsapp className='headerIcons BsWhatsapp'/>
          </a>
          <a href="https://www.linkedin.com/company/binatec-agency/" title="Instagram">
            <BsInstagram className='headerIcons BsInstagram'/>
          </a>
          <a href="https://www.instagram.com/binatecagency/" title="LinkedIn" >
            <BsLinkedin className='headerIcons BsLinkedin'/>
          </a>
          <a href="tel:+2349066548044" title="tel:+2349066548044" >
            <BsTelephone className='headerIcons ' />
          </a>
        </div>
    </div>
  )
}

export default Navbar