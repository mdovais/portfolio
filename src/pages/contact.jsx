import React from "react";
import Footer from "../components/footer";
import "../style/contact.css";
import MessageBox from "../components/messageBox";
import ContactProfile from "../components/contactProfile";
import ContactSocial from "../components/contactSocial";

const Contact = () => {
  return (
    <>
    <div class="contact-main-header">
      <div className="my-work8">
        <h1>
          I’d <span>Love to hear </span>from you.
        </h1>
        <p>
          Ready to connect and collaborate, drop me a line and let's turn ideas
          into reality!
        </p>
      </div>

      <div class="box-center">
    <div class="contact-box">
    <div class="left-profile">
      <ContactProfile/>
      <ContactSocial/>
      </div>
      <MessageBox />
      </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Contact;
