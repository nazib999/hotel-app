import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDes'>Sign up and you will send.</span>
        <div className="mailInputCon">
            <input type="text" placeholder='Your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList