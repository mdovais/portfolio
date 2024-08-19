import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

const Header = ({active,setActiveItem}) => {
  const headerobj = [
    {
      img: "https://framerusercontent.com/images/lmTnmcYy3Z8nwZYgNSeneCLfytk.svg",
      name: "Home",
    },
    {
      img: "https://framerusercontent.com/images/78ofjx9HDkcoL3Czhx9GKmWqmQ4.svg",
      name: "About",
    },
    {
      img: "https://framerusercontent.com/images/5JIdyHQaWcKvzziAtdnDXuTPt7g.svg",
      name: "Works",
    },
    {
      img: "https://framerusercontent.com/images/vY5TWkPDmenMpLfH1B9cANiVtrA.svg",
      name: "Contact",
    },
  ];

 

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <>
      <header>
        <div className="head">
          {headerobj.map((x) => (
            <div
              key={x.name}
              className={`home ${x.name === active ? "active" : ""}`}
              onClick={() => handleClick(x.name)}
            >
              <Link to={x.name} className="hd">
              <img src={x.img} alt="hh" />
                {x.name}
              </Link>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
