import Image from "next/image";
import React from "react";
import Me from "../../public/me.png";

type Props = {};

function AboutMe({}: Props) {
  return (
    <section className="container mt-5" id="about">
      <h3>About Me</h3>

      <div className="mt-2">
        <code className="mt-5">-- Hi My Name is Ry Sarorn --</code>
        <p className="mt-2">
          "I'm a recent computer science graduate from NUM University." I have 2
          years experien in web development and want to discover something new
          and take a journey with you contact and keep in touch.
        </p>
      </div>

      <div className="mt-5 w-full lg:flex lg:flex-row-reverse lg:items-center ">
        <div className="lg:ml-10 lg:w-[70%]">
          <p>
            I prefer to work in a smaller team, and see the direct impact I have
            on a project, which is the reason no. 1 why I am applying for the
            job with you. Other than that I am more or less an ordinary guy,
            with a girlfriend and a dog, and a passion for model trains. Is
            there anything else you’d like to know about my life at the moment?
          </p>
          <p className="mt-10">
            Well, I’ve been working on Web development for haft years now, while
            still studying at college. Had my own projects, coded mostly in
            Javascript and Python, but my account on the play store got
            suspended, for reasons I still fail to understand. But I learned a
            lot, both at school and while working on the Web. Now I am looking
            to get a job with a company, and am glad to be interviewing with you
            here. Apart from coding, I enjoy reading a good book, or a nice
            evening out with friends. That would do for a short introduction,
            please tell me if you’d like me to elaborate on anything from my
            education, or experience with Web
          </p>
        </div>

        <div className="lg:w-[30%]  overflow-hidden rounded-lg h-[18rem] md:h-[40rem] lg:h-[18rem]">
          <Image
            // loader={myLoader}
            src={Me}
            alt="Picture of the author"
            className="w-full h-full object-cover hover:scale-105 transition-all"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
