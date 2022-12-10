'use client'

import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const MainName = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <h1 className="text-teal-500 tracking-widest text-4xl md:text-7xl font-semibold font-lobster">
        Rorn Tech
      </h1>
    </motion.div>
  )
}

export default MainName