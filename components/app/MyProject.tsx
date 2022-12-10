"use client";

import React from "react";
import SocialMedia from "../../public/social_media.png";
import Image from "next/image";
import Sell from "../../public/sell.png";
import VideoCall from "../../public/video_call.png";
import FoodOrder from "../../public/food_order.jpg";
import Card from "../util/Card";

type Props = {};

const MyProject = (props: Props) => {
  const projects = [
    {
      id: 1,
      name: "Social Media",
      url: "https://rorn-tech-social-media.netlify.app/",
      image: SocialMedia,
    },
    {
      id: 2,
      name: "Sell Management",
      url: "https://stock-management-react.netlify.app",
      image: Sell,
    },
    {
      id: 3,
      name: "Real Time Food Order",
      url: "https://food-order-react-firebase.netlify.app/",
      image: FoodOrder,
    },
    {
      id: 4,
      name: "One To One Video Call",
      url: "https://spectacular-lamington-8fc5dd.netlify.app/",
      image: VideoCall,
    },
  ];

  return (
    <section className="container mt-5" id="project">
      <h3>My Projects</h3>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project: any) => (
          <a href={project.url} key={project.id} target="_blank" >
            <Card image={project.image} name={project.name} url={project.url} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyProject;
