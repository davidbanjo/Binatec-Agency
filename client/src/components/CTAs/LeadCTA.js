import React from 'react'
import "./leadCTA.css"

const LeadCTA = () => {
  return (
    <div className='leadCTAsec'>
        <div className='leadCTAcontainer' >
            <h3 className='subheadline'>Take your website to the next level</h3>
            <form>
                <input className='textinput' type='text' placeholder='Enter your website'/>
                <input type='submit' value="Get a Proposal" />
            </form>
        </div>
    </div>
  )
}

export default LeadCTA