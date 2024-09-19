import React, { useContext } from "react";
import "../style/textHeadline.css"
import { Link } from "react-router-dom";
import { NavContext } from "../context/navContext";

const TextHeadline = () => {
const {setActiveItem} = useContext(NavContext);
  const tickerTitle = [
    "Web Design",
    "Product Design",
    " UI Design",
    "Responsive Websites",
    "Social Media Design",
    " Visual Interaction",
    "Web Design",
    "Product Design",
    " UI Design",
    "Responsive Websites",
    "Social Media Design",
    " Visual Interaction",
  ];
  return (
    <>
    
      <div className="texts-footer">
        <h1>
          Enhance Your Digital Presence with <br />
          <span>Creative </span>
          Innovation.
        </h1>
        <p>
          With extensive experience in React, Node.js, and MongoDB, I bring your
          digital ideas to life with cutting-edge technology.I craft seamless
          user interfaces and build robust, scalable backend solutions. Let's
          collaborate to enhance your online presence through innovative design
          and powerful functionality.
        </p>
      </div>

     <Link to="/Contact" onClick={()=>setActiveItem("Contact")}><div className="red-box">
        <div className="red-footer">Let's Work Together</div>
      </div></Link> 

      <div className="tag-box">
        <div className="ticker">
          <div className="ticker-title">
            {tickerTitle.map((item, idx) => {
              return <span key={idx}>{item}</span>;
            })}
          </div>
        </div>

        <div className="footer-container">
          <div className="boxes">
            <div className="div-inbox">15+</div>
            <p>Completed Project</p>
          </div>

          <div className="boxes">
            <div className="div-inbox">1+</div>
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextHeadline;
