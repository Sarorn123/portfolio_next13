import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="w-full bg-teal-500 py-5">
      <div className="container">
        <h1 className="text-white tracking-widest text-4xl font-semibold font-lobster text-center">
          Rorn Tech
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-5">
          <div>
            <h3>Follow Me</h3>

            <div className="flex items-center mt-5">
              <a
                href="https://www.youtube.com/@rorntech7994/videos"
                target="_blank"
              >
                <AiFillYoutube className="text-2xl mx-1 transition-all cursor-pointer text-white" />
              </a>
              <a
                href="https://github.com/Sarorn123?tab=repositories"
                target="_blank"
              >
                <AiFillGithub className="text-2xl mx-1 transition-all cursor-pointer text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/ry-sarorn-452133245/"
                target="_blank"
              >
                <AiFillLinkedin className="text-2xl mx-1 transition-all cursor-pointer text-white" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100084446537606"
                target="_blank"
              >
                <BsFacebook className="text-2xl mx-1 transition-all cursor-pointer text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3>Sponsor</h3>

            <div className="mt-5">
              <a href="">
                <h4 className="text-white hover:underline">Mum</h4>
              </a>
              <a href="">
                <h4 className="text-white hover:underline">Brother</h4>
              </a>
            </div>
          </div>

          <div>
            <h3>Overview</h3>

            <div className="mt-5">
              <a href="#main">
                <h4 className="text-white hover:underline">Home</h4>
              </a>
              <a href="#about">
                <h4 className="text-white hover:underline">About</h4>
              </a>

              <a href="#skill">
                <h4 className="text-white hover:underline">Skill</h4>
              </a>

              <a href="#project">
                <h4 className="text-white hover:underline">Project</h4>
              </a>

              <a href="#contact">
                <h4 className="text-white hover:underline">Contact</h4>
              </a>
            </div>
          </div>

          <div>
            <h3>Info</h3>

            <div className="mt-5">
              <h4 className="text-white">
                If you got any problem please kindly contact vea contact that i
                provide in website. thank your guys for comming hope you doing
                well wish you all good luck.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <p className="text-center text-white">Power By NextJs 13</p>
    </section>
  );
};

export default Footer;
