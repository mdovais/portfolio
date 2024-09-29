import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
import { NavContext } from "../context/navContext";

const Footer = () => {
const {setActiveItem} = useContext(NavContext);

  const socialMedia = [
    {
      img: "https://framerusercontent.com/images/gtzDysUq73PcIFESNRa0djSYuTY.svg",
      href: "https://x.com/md__ovais",
      name: "About Me",
      link: "About",
      support: "Instagram",
      shref: "https://www.instagram.com/dev.ovais",
    },
    {
      img: "https://framerusercontent.com/images/ujvuU7oTba4qXKvJvQc31MlqqBk.svg",
      href: "https://www.instagram.com/dev.ovais/",
      name: "My Works",
      link: "Works",
      support: "LinkdIn",
      shref: "https://www.linkedin.com/in/mdovais",
    },
    {
      img: "https://framerusercontent.com/images/OG6uWRwgqMiEnNaFAm9SO03F0.svg",
      href: "https://www.linkedin.com/in/mdovais/",
      name: "Contact",
      link: "Contact",
      support: "GitHub",
      shref: "https://github.com/mdovais",
    },
  ];
  return (
    <>
      <div className="footers">
        <div className="foot">
          <div className="my-image">
            <img className="myimg25" src="/images/profile_pic-25.png" alt="img" />
          </div>
          <div className="one-footer">
            <div className="name25">
              <span>Owais Khan</span>
            </div>

            <div className="footer-text1">Full Stack Developer</div>
            <div className="insta-img">
              {socialMedia.map((i,idx) => {
                return (
                  <Link key={idx} to={i.href}>
                    <img className="pic" src={i.img} alt="img" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="two-footer">
            <div className="name25">Explore</div>
            {socialMedia.map((i,idx) => {
              return (
                <div className="footer-text" key={idx}>
                  <Link to={
                    "/"+i.link} onClick={()=>setActiveItem(i.link)}>{i.name}</Link>
                </div>
              );
            })}
          </div>

          <div className="two-footer">
            <div className="name25">Show Support!</div>
            {socialMedia.map((i,idx) => {
              return (
                <div className="footer-text" key={idx}>
                  <Link to={i.shref}>{i.support}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/Contact" onClick={()=>setActiveItem("Contact")} >
          <div className="four-footer">
            Contact Me
            <img
              className="pic2"
              src="https://img.icons8.com/?size=128&id=71028&format=png"
              alt="img"
            />
          </div>
        </Link>
      </div>
      <div className="last">
        <div className="myName">
          <img className="pic3" src="/images/my-MDOwaisKhan.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Footer;
