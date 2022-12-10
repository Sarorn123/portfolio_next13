"use client";

import React from "react";
import { Progress, Space, Divider } from "antd";

type Props = {};

const Skill = (props: Props) => {
  return (
    <section className="container mt-5" id="skill">
      <h3>Skill</h3>

      <div className="mt-5 grid gap-10 lg:grid-cols-2">
        <div>
          <Divider orientation="left" plain className="font-globalFont dark:text-white">
            Languages
          </Divider>

          <p>HTML</p>
          <Progress
            percent={89.9}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          />

          <p>CSS</p>
          <Progress
            percent={80.9}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />

          <p>JAVASCRIPT</p>
          <Progress
            percent={70.9}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />

          <p>PHP</p>
          <Progress
            percent={58.5}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />

          <p>PYTHON</p>
          <Progress
            percent={50.5}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#BE3025" }}
          />
        </div>

        <div>
          <Divider orientation="left" plain className="font-globalFont dark:text-white">
            Frameworks
          </Divider>

          <p>REACT JS</p>
          <Progress
            percent={89.9}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
          />

          <p>VUE JS</p>
          <Progress
            percent={55.9}
            strokeColor={{ "0%": "#108ee9", "100%": "#BE3025" }}
          />

          <p>LARAVEL</p>
          <Progress
            percent={70.9}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />

          <p>DJANGO</p>
          <Progress
            percent={50.9}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />

          <p>EXPRESS</p>
          <Progress
            percent={80.5}
            status="active"
            strokeColor={{ from: "#108ee9", to: "#87d068" }}
          />
        </div>
      </div>

      <Divider orientation="left" plain className="font-globalFont dark:text-white">
        Databases
      </Divider>

      <p>SQL</p>
      <Progress
        type="line"
        percent={80}
        strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
      />
      <p>NO SQL</p>
      <Progress
        type="line"
        percent={60}
        strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
      />
    </section>
  );
};

export default Skill;
