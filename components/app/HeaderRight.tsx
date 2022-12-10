"use client";

import React from "react";
import { motion } from "framer-motion";
import Mode from "../util/Mode";

interface Props {}

const HeaderRight = (props: Props) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, left: -1 }}
      animate={{ opacity: 1, left: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Mode />
      <a
        href=""
        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-transparent border border-teal-500 hover:text-teal-500 transition-all"
        download="../../public/rysarorn.doc"
      >
        Download CV
      </a>
    </motion.div>
  );
};

export default HeaderRight;
