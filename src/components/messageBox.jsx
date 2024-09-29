import React, { useState } from 'react'
import { SendMessage } from '../service/service';

const MessageBox = () => {
  const [name ,setName] = useState();
  const [email ,setEmail] = useState();
  const [message ,setMessage] = useState();
  const [resMessage,setResMessage] = useState("");

const HandleFormSubmit = async(e) =>{
  e.preventDefault()
  const result = await SendMessage({name,email,message});
  console.log(result.data)
  const resmessage = result.data.response;
  setResMessage(resmessage)
}
  return (
    <div className="right-profile">
          <h4>I'm Here for Your Questions</h4>
          <form onSubmit={HandleFormSubmit}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <textarea
             onChange={(e)=>setMessage(e.target.value)}
              name="message"
              id="textarea"
              placeholder="Message"
            ></textarea>
            <button type="submit">{resMessage?resMessage:"Send a message"}</button>
          </form>
        </div>
  )
}

export default MessageBox;