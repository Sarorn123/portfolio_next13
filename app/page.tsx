import React from "react";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import MainSection from "../components/app/MainSection";
import AboutMe from '../components/app/AboutMe';
import Skill from '../components/app/Skill';
import MyProject from '../components/app/MyProject';
import Contact from '../components/app/Contact';
import TopTheTopButton from "../components/util/TopTheTopButton";

const Home = () => {
  return (
    <main>
      <MainSection />
      <AboutMe />
      <Skill />
      <MyProject />
      <Contact />
      <TopTheTopButton />
    </main>
  );
};

export default Home;
