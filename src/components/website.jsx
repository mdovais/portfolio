import React from "react";
import { Link } from "react-router-dom";
import "../style/website.css";

const Website = () => {
  const webData = [
    {
      img: "/images/linkedIn.png",
      name: "LinkedIn Clone",
      link: "https://mdovais.github.io/linkedin/",
    },
    {
      img: "/images/facebook.png",
      name: "Facebook Clone",
      link: "https://mdovais.github.io/facebook/",
    },
  ];
  return (
    <>
      <div className="my-work">
        <h1>
          My Creative <span>Websites</span>
        </h1>
        <p>Explore a showcase of my diverse websites and creations</p>
      </div>

      <div className="two-works">
        {webData.map((i) => {
          return (
            <Link to={i.link}>
              <div className="work1">
                <div className="iner-text-work">{i.name}</div>
                <div className="iner-box10"
                 style={{backgroundImage:`url(${i.img})`, 
      height: "300px", backgroundRepeat: "no-repeat"}}
      >

      </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Website;
