import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../../assets/BrightSpend.png";
import { useContext } from "react";
import { NewUserContext } from "../../hooks/NewUserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../main/Hero";
import HomeContent from "./Mckup";
import StatsComp from "./Stats";
import { Footer } from "./Footer";
import { TestimonialSection } from "./Testimonials";



function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-6 text-black space-y-2 md:text-base text-xl pb-5 md:pb-0 md:space-y-0">
      
      <li>
        <Link to="#">Home</Link>
      </li>
      <li>
        <Link to="#">About</Link>
      </li>
      <li>
        <Link to="#">Contact Us</Link>
      </li>
    </ul>
  );
}

function Body() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { setNewUser } = useContext(NewUserContext);
  const [user, setUSer] = useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setNewUser(user);
    navigate("/register");
  }

  return (
    <>
      <Navbar
        color="transparent"
        fullWidth
        className="z-20 sticky top-0 h-[5.4rem] bg-white backdrop-blur-lg"
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 md:ps-8">
          <img
            src={Logo}
            alt=""
            className="md:h-16 h-12 hover:animate-pulse cursor-pointer"
          />

          <div className="flex gap-4 items-center">
            <div className="hidden lg:block me-4">
              <NavList />
            </div>
            <Link to="/login">
              <Button variant="outlined" className="hidden lg:inline-block">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="hidden lg:inline-block bg-blue-500">
                Sign in
              </Button>
            </Link>
          </div>
          <IconButton
            size="sm"
            variant="filled"
            color="blue-gray"
            onClick={handleOpen}
            className="ml-auto inline-block text-blue-gray-900 lg:hidden bg-transparent shadow-none"
          >
            {open ? (
              <IoClose className="h-16 w-8" strokeWidth={2} />
            ) : (
              <IoReorderThree className="h-16 w-10" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="mt-2 rounded-xl bg-white py-2">
            <NavList />
            <Link to="/login">
              <Button variant="outlined" className="py-3 text-md" fullWidth>
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className=" bg-blue-500 mt-3 py-3 text-md" fullWidth>
                Sign in
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
      <div>
        <header className="bg-white md:p-8 z-10 ">
          <div className="grid mt-7 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch ">
            <div className="container mx-auto px-4 text-center relative z-10">
              <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-blue-50 py-1 lg:px-4 px-1 font-medium text-primary">
                Exciting News! Introducing our latest innovation 🎊
              </Typography>
              <Typography
                variant="h1"
                color="blue-gray"
                className="md:px-auto md:py-3 md:text-5xl text-3xl leading-snug pt-3 text-center md:w-full"
              >
                Empower Your 
                Finances with AI:
                <span className=" leading-snug inline-flex">
                  Smarter Insights,
                </span>
                <span className="text-blue-500 leading-snug inline-flex">
                  Better Decisions
                </span>
                {" and "}
                <span className="text-blue-500 leading-snug inline-block">
                  Effortlessly Managed.
                </span>
              </Typography>

              <Typography
                variant="lead"
                className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
              >
                Discover AI-powered insights for smarter financial decisions,
                effortlessly managed with precision.
              </Typography>
              <div className="mt-8 grid w-full place-items-start md:justify-center">
                <form
                  className="mb-2 flex w-full flex-col gap-4 md:flex-row"
                  onSubmit={handleSubmit}
                >
                  <Input
                    color="gray"
                    label="Enter your email"
                    size="lg"
                    required
                    type="email"
                    onChange={(e) => setUSer(e.target.value)}
                  />
                  <Button
                    type="submit"
                    color="gray"
                    className="w-full md:px-4 md:w-[12rem] bg-blue-500 md:py-3 py-4"
                  >
                    Get started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <Hero />
        <HomeContent />
        {/* <FeatureSection/> */}
        <StatsComp />
        <TestimonialSection/>
        {/* <NewsLetter /> */}
        <Footer />
      </div>
    </>
  );
}

export default Body;
