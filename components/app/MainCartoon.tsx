"use client";

import Image from "next/image";
import React from "react";
import Cartoon from "../../public/cartoon.png";
import { motion } from "framer-motion";

interface Props {}

const MainCartoon = (props: Props) => {
  return (
    <motion.div
      className="h-[17rem] w-[17rem] rounded-full bg-teal-500 overflow-hidden"
      initial={{ rotate: -20 }}
      animate={{  rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={Cartoon}
        alt="Cartoon"
        priority={true}
        className="h-full w-full object-cover"
      ></Image>
    </motion.div>
  );
};

export default MainCartoon;
