"use client";

import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {}

const Mode = (props: Props) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const changeTheme = () => {
    if (theme == "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  return (
    <BsFillMoonStarsFill 
    className="text-xl mr-5 cursor-pointer transition-all hover:text-teal-500 dark:text-teal-500"
    onClick={changeTheme}
     />
  );
};

export default Mode;
