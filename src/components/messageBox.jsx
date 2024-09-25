import React, { useState } from 'react'
import { sendNumber } from '../service/service';

const MessageBox = () => {
  const [name ,setName] = useState();
  const [email ,setEmail] = useState();
  const [message ,setMessage] = useState();

const handleFormSubmit = async(e) =>{
  e.preventDefault()
  const result = sendNumber(name,email,message);
  console.log (result);
}
  return (
    <div className="right-profile">
          <h4>I'm Here for Your Questions</h4>
          <form onSubmit={handleFormSubmit}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <textarea
             onChange={(e)=>setMessage(e.target.value)}
              name="message"
              id="textarea"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send a message</button>
          </form>
        </div>
  )
}

export default MessageBox;