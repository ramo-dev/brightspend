import React from "react";
import Dash from "../../../assets/dash.png";

const Hero = () => {
  return (
    <div>
      <div className="absolute md:top-1/3 top-2/3 left-1/2 -translate-x-1/2 z-0 md:w-[70%] w-full">
        <img
          src={Dash}
          alt=""
          className="bg-gradient-to-b from-white to-white h-full rounded-lg md:block hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
