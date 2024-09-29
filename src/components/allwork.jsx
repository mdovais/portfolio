import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/greet.css"
import { NavContext } from "../context/navContext";

const Allwork = () => {
  const {setActiveItem} = useContext(NavContext);
  return (
    <>
      <div className="great6">
        <div className="greet-10">
          <Link to="/Works"onClick={()=>setActiveItem("Works")} >
            <div className="name10">View All Works</div>
         </Link>
          <div className="greeting10"></div>
        </div>
      </div>
    </>
  );
};

export default Allwork;
