"use client";

import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect } from "react";

type Props = {};

const TopTheTopButton = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const clear = window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    });

    return () => clear;
  }, []);

  const scroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {show && (
        <button
          className="flex items-center justify-center bg-teal-500 hover:bg-teal-700 active:bg-teal-700 text-white h-10 w-10 rounded-full fixed right-10 bottom-10 border border-white"
          onClick={scroll}
        >
          <ArrowUpOutlined />
        </button>
      )}
    </>
  );
};

export default TopTheTopButton;
