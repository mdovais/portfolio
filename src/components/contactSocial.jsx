import React from "react";
import { Link } from "react-router-dom";
const ContactSocial = () => {
  const dataMedia = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968958.png",
      href: "https://x.com/md__ovais",
      name: "Twitter",
      fllwr: "2k+ Followers",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/717/717392.png",
      href: "https://www.instagram.com/dev.ovais/",
      name: "Instagram",
      fllwr: "5+ Followers",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3488/3488334.png",
      href: "https://www.linkedin.com/in/mdovais/",
      name: "Linkedin",
      fllwr: "500+ Followers",
    },
  ];
  return (
    <>
      <div className="social-networks">
        {dataMedia.map((i) => {
          return (
            <>
              <Link to={i.href}>
                <div className="flex-row">
                  <div className="img-box">
                    <img src={i.img} alt="Logo"></img>
                  </div>
                  <div class="two-text">
                    <p>{i.name}</p>
                    <span>{i.fllwr}</span>
                  </div>

                  <div className="arrow">
                    <img
                      src="https://framerusercontent.com/images/3HBSQpOa0jV29Yfsf50Y3cgfYXw.svg"
                      alt="/"
                    />
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContactSocial;
