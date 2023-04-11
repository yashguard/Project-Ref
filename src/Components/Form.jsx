import React from 'react'

const Form = () => {
  return (
    <section>
      <form >
        <input type="text" placeholder='Enter your First Name' />
        <input type="text" placeholder='Enter your Last Name' />
        <select className='gender'>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select className='role'>
          <option value="">Select</option>
          <option value="1">Front End Developer</option>
          <option value="2">Back End Developer</option>
          <option value="3">Full Stack Developer</option>
          <option value="4">Flutter Developer</option>
          <option value="5">Web Designer</option>
        </select>
        <input type="submit" value='Submit' />
      </form>
    </section>
  )
}

export default Form
