import React from "react";
import { Link } from "react-router-dom";
import "../style/greet.css"

const Allwork = ({setactive}) => {
  return (
    <>
      <div class="great6">
        <div class="greet-10">
          <Link to="/Works"onClick={()=>setactive("Works")} >
            <div class="name10">View All Works</div>
         </Link>
          <div class="greeting10"></div>
        </div>
      </div>
    </>
  );
};

export default Allwork;
