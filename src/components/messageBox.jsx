import React from 'react'

const MessageBox = () => {
  return (
    <div className="right-profile">
          <h4>I'm Here for Your Questions</h4>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
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