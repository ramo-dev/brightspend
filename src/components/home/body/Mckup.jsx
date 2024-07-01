import React from "react";
import Mockup1 from "../../../assets/442shots_so.png";
import Mockup2 from "../../../assets/343shots_so.png";
import { FcCollapse } from "react-icons/fc";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="relative mt-[-2rem] md:justify-between justify-center scroll-smooth bg-blue-100 md:py-10 md:px-0 px-5 md:h-screen py-28 flex items-center flex-wrap z-0">
        <img
          src={Mockup1}
          alt=""
          className="md:block hidden w-8/12 grayscale"
        />
        <div className="md:absolute right-20 md:w-5/12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-5">
          Understand Your Finances with Precision
          </h1>
          <p className="text-xl font-light mb-10">
          Empower yourself with smarter financial decisions. Our platform transforms complex data into actionable insights, enabling you to make informed choices and optimize your financial health effortlessly. Join us in revolutionizing the way you manage money.
          </p>
          <span className="flex justify-center animate-bounce md:mt-2 mt-10">
            <FcCollapse className="rotate-180 text-5xl animate-pulse" />
          </span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative flex flex-row-reverse md:justify-between justify-center scroll-smooth md:px-0 px-5 py-16 md:py-0 md:h-full items-center flex-wrap">
        <div className="md:absolute left-20 md:w-5/12 text-center md:text-left">
          <h1 className="text-4xl font-bold md:my-3 my-7">
          Empower Your Financial Journey Today
          </h1>
          <p className="text-xl font-light my-8">
          Unlock the power of precision with our AI-powered finance tracker. Seamlessly convert M-Pesa and bank statements into meaningful analytics that offer deep insights into your financial habits. Harness the accuracy of advanced technology to understand your spending patterns like never before.
          </p>
          {/* <Link to="/register">
            <Button className="bg-blue-500 text-white py-3 lowercase font-medium text-base md:w-fit w-full">
              Click me to find out how
            </Button>
          </Link> */}<span className="flex justify-center animate-bounce md:mt-2 mt-10">
            <FcCollapse className="rotate-180 text-5xl animate-pulse" />
          </span>
        </div>
        <img
          src={Mockup2}
          alt=""
          className="md:block hidden w-9/12 dropsh grayscale"
        />
      </div>
    </>
  );
};

export default HomeContent;
