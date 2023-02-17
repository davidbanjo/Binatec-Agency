import React from 'react'

const InputWebsite = () => {
  return (
    <form className='leadInputForm'>
        <input className='textinput' type='text' placeholder='Enter your website'/>
        <input className='submitButton' type='submit' value="Get a Proposal" />
    </form>
  )
}

export default InputWebsite