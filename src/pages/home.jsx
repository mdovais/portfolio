import Allwork from "../components/allwork";
import Footer from "../components/footer";
import Greet from "../components/greet";
import Skills from "../components/skills";
import TextHeadline from "../components/textHeadline";
import Tools from "../components/tools";
import Website from "../components/website";
import React from "react";

const Home = () => {
  console.log("home");
  return (
    <>
      <Greet />
      <TextHeadline />
      <Skills />
      <Tools />
      <Website />
      <Allwork/>
      <Footer/>
    </>
  );
};

export default Home;
