import React from "react";
import "../style/skills.css";

const Skills = () => {

  const skillsData = [{
    "t1": "Web Design Principles",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=80&id=114624&format=png"
  },
  {
    "t1": "User Interface(UI)",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=64&id=D47p6uA2kE9C&format=png"
  },
  {
    "t1": "User Experience (UX)",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=80&id=yEzFx4cwLDIh&format=png"
  },
  {
    "t1": "Custom Development",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=80&id=ektx9d1ZvY4q&format=png"
  },
  {
    "t1": "Web Design Principles",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=64&id=8JuEhrj6qUVv&format=png"
  },
  {
    "t1": "Custom Development",
    "t2": `Proficiency in the fundamental principles of design, such as layout,
          color theory, typography, and visual hierarchy`,
    "img": "https://img.icons8.com/?size=64&id=GzoGDuKxXeMV&format=png"
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
      {skillsData.map((i)=>{
        return <div className="box1">
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
