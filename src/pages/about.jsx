import React from 'react';
import Footer from '../components/footer';
import "../style/about.css"
import Typed from 'typed.js';

const About = () => {
  const imgData = ["https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png","https://nodejs.org/static/logos/jsIconGreen.svg","https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000","https://static-00.iconduck.com/assets.00/mongodb-original-wordmark-icon-505x512-q86sq243.png","https://framerusercontent.com/images/OkBKDrqon3Bb68s6kPwyucgQiWM.svg","https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",]
  const el = React.useRef(null);
console.log("about");

  React.useEffect(() => {
    new Typed(el.current, {
      strings: ["Scalable React Applications.",
        "Advanced JavaScript.",
        "State Management (Hooks, Redux Toolkit).",
        "Responsive Design.",
        "Backend Integration (Node.js, Express.js).",
        "MongoDB.",
        "Performance Optimization.",
        "Git Workflows."],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity
    });
  });
  
  return (
    <>
    <div className="about-main-header">
      <div className="profile-box">
      <div className="profile">
        <img
          src="/images/linkdinprofile.jpeg" 
          alt='pic'/>
      </div>
      <div className="text-box5">
        <div className="great-5">
          <div className="greet-1">
            <div className="greeting">
              <span className="wave">🤚</span>
            </div>
            <div className="name">
              Hello! Explore My &nbsp;<span> Portfolio</span>
            </div>
          </div>
        </div>
        <h1>I'm&nbsp;<span>Owais khan</span></h1>
        <div className='flex-clum'>
        <h2>I specialize in </h2>
        <div><span id='aboout-text-u' ref={el} ></span></div>
        </div>
        <div className="about-text">
          <span>About me</span>
          <div>
         
Full Stack Developer with over 1 year of experience specializing in React.js, Redux, JavaScript (ES6+), HTML, CSS, Node.js, Express.js, and MongoDB. Adept at creating efficient, scalable, and responsive web applications with a focus on performance optimization, state management (Hooks, Redux Toolkit), backend integration, and enhancing user experience through advanced JavaScript concepts, responsive design, and Git workflows.</div>
        </div>
      </div>
    </div>
    </div>


    <div className="text-box3">
    <h3>Milestones of My <span>Career</span></h3>
    <p>
      My career journey has been a vibrant mix of overcoming challenges, developing skills, and celebrating achievements.
    </p>
  </div>


  <div className="year1">
    <div className="year">
      <div className="section">March 2023</div>
    </div>
  </div>
 

  <div class="tools">
    <div class="tools-img">
      <div class="section">Tools I Use With Easy</div>
      <div class="icons">
        {imgData.map((i)=>{
          return  <div class="li">
          <img src={i} alt="img" />
        </div>
        })}
      </div>
    </div>
  </div>

  <div class="beginning-box">
    <div class="biggening">
      <span>The Beginning </span>
      <div class="section">
        Joined the exciting world of web design, diving into HTML, CSS, and
        JavaScript. Experimented with creating personal projects and exploring
        various design trends. Started building a solid foundation for the
        journey ahead.
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default About;