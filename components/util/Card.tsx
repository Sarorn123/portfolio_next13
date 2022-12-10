import Image from "next/image";
import React from "react";

type Props = {
  image: any;
  name: string;
  url: string;
};

const Card = ({ image, name, url }: Props) => {
  return (
    <div className="h-[18rem] lg:h-[15rem] border rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all">
      <Image
        src={image}
        alt={name}
        className="h-[12rem] lg:h-[10rem] object-cover"
      ></Image>
      <div className="p-5">
        <h4 className="text-sm text-gray-800 font-semibold dark:text-gray-200">{name}</h4>
        <p className="mt-2 truncate hidden md:block">{url}</p>
      </div>
    </div>
  );
};

export default Card;
