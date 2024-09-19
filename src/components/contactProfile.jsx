import React from "react";

const ContactProfile = () => {
  return (
    <div className="main-profile">
      <div className="profile-img-name">
        <img className="greyscale" src="/images/profile_pic-25.png" alt="img" />
        <div className="flex-clum">
          <div className="avalable"> <img className="greendot" src="https://cdn-icons-png.freepik.com/256/17500/17500413.png?semt=ais_hybrid" alt="img" /> Avalable to work</div>
          <h3>Md Owais Khan</h3>
          <span> Full Stack Developer</span>
        </div>
      </div>
      <div className="time">IST (8am to 8pm)</div>
    </div>
  );
};

export default ContactProfile;
