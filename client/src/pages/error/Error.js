import React from 'react'
import { Link } from 'react-router-dom'
import "./error.css"

const Error = () => {
  return (
    <div className='error hero'>
        <h5 className='errorTitle'>
            4<span className='colouredText'>0</span>4
        </h5>
        <p className='notExist'>The page you're looking for does not exist</p>
        <Link to="/">
            <p>Return to home</p>
        </Link>
    </div>
  )
}

export default Error