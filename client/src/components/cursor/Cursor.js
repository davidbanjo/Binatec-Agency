import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import "./cursor.css"

const Cursor = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    // console.log(mousePosition)
    
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = e => {
            // `${""}`
           setMousePosition({
            x: e.clientX,
            y: e.clientY
           })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
}, [])

    const variants = {
        default: {
            x: mousePosition.x - 13, 
            y: mousePosition.y - 13
            // backgroundColor: "white"
        },
        text: {
            height: 50,
        }
    }
    
    let textEnter = () => setCursorVariant("text")
    let textLeave = () => setCursorVariant("default")


  return (
    <motion.div className='cursor' variants={variants} animate={cursorVariant} textEnter={textEnter} textLeave={textLeave}/>
  )
}

export default Cursor