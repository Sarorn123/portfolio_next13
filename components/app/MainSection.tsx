import React from "react";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import Image from "next/image";
import MainName from "./MainName";
import MainCartoon from "./MainCartoon";

type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="container text-center lg:h-[90vh] xl:h-auto" id="main">
      <MainName />
      <h2 className="mt-2 text-black dark:text-white">
        I share my knowledge on youtube feel free to check it out !
      </h2>
      <p className="mt-2 ">
        I’m skilled with PHP and Javascript Python, and I am trying to learn
        other programming languages, step by step.
      </p>

      <div className="flex justify-center items-center mt-10">
        <a href="https://www.youtube.com/@rorntech7994/videos" target="_blank">
          <AiFillYoutube className="text-3xl mx-2 hover:text-teal-500 transition-all cursor-pointer" />
        </a>
        <a href="https://github.com/Sarorn123?tab=repositories" target="_blank">
          <AiFillGithub className="text-3xl mx-2 hover:text-teal-500 transition-all cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ry-sarorn-452133245/"
          target="_blank"
        >
          <AiFillLinkedin className="text-3xl mx-2 hover:text-teal-500 transition-all cursor-pointer" />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100084446537606"
          target="_blank"
        >
          <BsFacebook className="text-3xl mx-2 hover:text-teal-500 transition-all cursor-pointer" />
        </a>
      </div>

      <div className="w-full flex justify-center mt-14 ">
        <MainCartoon />
      </div>
    </section>
  );
}
