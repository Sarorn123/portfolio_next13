'use client'

import React from 'react'

type Props = {
    onClick: any,
    text : string,
}

const CustomButton = ({onClick, text}: Props) => {
  return (
    <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-transparent border border-teal-500 hover:text-teal-500 transition-all">Download Cv</button>
  )
}

export default CustomButton;