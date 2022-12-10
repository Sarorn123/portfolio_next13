import React from "react";
import HeaderRight from "./HeaderRight";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full mb-12 h-[5rem] lg:h-[10vh] xl:h-[5rem]">
      <div className="container mx-auto flex items-center h-full justify-between">
        <h1 className="flex-1 text-xl font-bold text-gray-800 dark:text-white">
          RorN.Tech
        </h1>
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
