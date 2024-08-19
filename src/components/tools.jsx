import React from 'react';
import "../style/tools.css"

const Tools = () => {
   const toolsdata = [{
        "img" : "https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png",
        "t1": "React.Js",
        "t2": "React is a JavaScript library for building dynamic, user-friendly interfaces with reusable components.",
    },
    {
        "img" : "https://nodejs.org/static/logos/jsIconGreen.svg",
        "t1": "Node.Js",
        "t2": "Node.js is a fast, event-driven JavaScript runtime for building scalable network applications.",
    },
    {
        "img" : "https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-11217637-9200641.png?f=webp&w=256",
        "t1": "Express",
        "t2": " Express is a minimal and flexible Node.js web application framework that simplifies the creation of robust and scalable server-side applications.",
    },
    {
        "img" : "https://cdn.iconscout.com/icon/premium/png-256-thumb/mongodb-5363123-4488912.png?f=webp&w=128",
        "t1": "MongoDB",
        "t2": "MongoDB is a flexible, document-oriented NoSQL database designed for scalability and developer ease.",
    },
    {
        "img" : "https://framerusercontent.com/images/OkBKDrqon3Bb68s6kPwyucgQiWM.svg",
        "t1": "Figma",
        "t2": `My dynamic design playground, fostering collaboration to ideate,
          prototype, and craft stunning UI.`,
    },
    {
        "img" : "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        "t1": "GitHub",
        "t2": "GitHub is a web-based platform for version control and collaborative software development using Git.",
    },
]
  return (
    <>
    <div className="text-tools">
    <h1>Tools I Use with <span>Ease</span></h1>
    <p>
      I have gained proficiency in a diverse array of tools, equipping me to
      craft robust and innovative solutions
    </p>
  </div>

  <div className="partision2">

    {toolsdata.map((i)=>{
    return <div className="footer2">
    <div className="iner-text3">
      <div className="imag-tag">
        <img
          src={i.img} alt='img'/>
      </div>{i.t1}
      </div>
    <div className="iner-text4">{i.t2}</div>
  </div>
    })}
  </div>
    </>
  )
}

export default Tools;