import React from 'react';
import Footer from '../components/footer';
import "../style/about.css"

const About = ({setactive}) => {
  const imgData = ["https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png","https://nodejs.org/static/logos/jsIconGreen.svg","https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000","https://static-00.iconduck.com/assets.00/mongodb-original-wordmark-icon-505x512-q86sq243.png","https://framerusercontent.com/images/OkBKDrqon3Bb68s6kPwyucgQiWM.svg","https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",]
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
        <h2>I specialize in</h2>
        <div className="about-text">
          <span>About me</span>
          <div>
            Frontend Developer with over 1 years of experience specialising in React.js, Redux, JavaScript (ES6+), HTML, and
CSS. Adept at creating efficient, scalable, and responsive web applications with a focus on performance
optimisation, state management, and enhancing user experience.
          </div>
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
  <Footer setactive={setactive}/>
  </>
  )
}

export default About;