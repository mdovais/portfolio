import React from "react";
import "../style/skills.css";

const Skills = () => {

  const skillsData = [{
    "t1": "Frontend Development",
    "t2": 'Expertise in React.js, Redux, JavaScript (ES6+), HTML, and CSS to build responsive, scalable web applications.',
    "img": "https://img.icons8.com/?size=80&id=114624&format=png"
  },
  {
    "t1": "State Management",
    "t2": 'Proficient in using React Hooks and Redux Toolkit for efficient application state management.',
    "img": "https://img.icons8.com/?size=64&id=D47p6uA2kE9C&format=png"
  },
  {
    "t1": "Backend Development",
    "t2": "Skilled in Node.js, Express.js, and MongoDB for developing robust REST APIs and backend integration.",
    "img": "https://img.icons8.com/?size=80&id=yEzFx4cwLDIh&format=png"
  },
  {
    "t1": "Performance Optimization",
    "t2": "Strong focus on optimizing web application performance using browser dev tools and React best practices.",
    "img": "https://img.icons8.com/?size=80&id=ektx9d1ZvY4q&format=png"
  },
  {
    "t1": "Responsive Design",
    "t2": 'Adept at creating cross-browser compatible, mobile-first designs to enhance user experience.',
    "img": "https://img.icons8.com/?size=64&id=GzoGDuKxXeMV&format=png"
  },
  {
    "t1": "Version Control & Collaboration",
    "t2": 'Proficient in Git workflows for version control, code collaboration, and maintaining project integrity.',
    "img": "https://img.icons8.com/?size=64&id=8JuEhrj6qUVv&format=png"
    
  },]
  return (
    <>
      <div className="text-box2">
        <h1>
          My <span>Skills</span> and Expertise
        </h1>
        <p>
          As a web designer, I bring a versatile skill set to transform your web
          design visions into stunning, user-friendly realities. Let's
          collaborate to create visually captivating and highly functional
          websites that stand out.
        </p>
      </div>
        <div className="flex-box">
      {skillsData.map((i,idx)=>{
        return <div key={idx} className="box1">
        <div className="iner-box">
          <img src={i.img} alt="hh"/>{}
        </div>
        <div className="iner-text">{i.t1}</div>
        <div className="iner-text2">{i.t2}</div>
      </div>
      })}
      </div>
      
    </>
  );
};

export default Skills;
