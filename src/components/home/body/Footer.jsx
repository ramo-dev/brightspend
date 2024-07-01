import { Button, Dialog, DialogBody, DialogFooter, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";


export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setIsOpen(!isOpen);
  }


  return (
    <footer className="w-full bg-white shadow-lg md:p-8 p-6 md:px-12 border border-t-2">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* <img src={Logo} alt="logo-ct" className="w-14" /> */}
        <form
        onSubmit={handleSubmit}
        className="mb-2 flex w-full max-w-[30rem] flex-col gap-4 md:flex-col md:mt-5"
        //   onSubmit={handleSubmit}
      >
        <h1 className="text-blue-400 text-start">Sign in To our newsLetter</h1>
        <div className="flex gap-4 md:flex-nowrap flex-wrap md:w-full">
          <Input
            color="gray"
            label="Enter your email"
            size="lg"
            type="email"
            className="w-full "
            // onChange={(e) => setUSer(e.target.value)}
          />
          <Button
            type="submit"
            color="gray"
            className="w-full md:w-[12rem] bg-blue-500"
          >
            Sign Me Up
          </Button>
        </div>
      </form >

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <Dialog open={isOpen} className="p-2">
        <DialogBody>
        <p className="text-lg font-medium">Welcome aboard! You're now part of our exclusive community. Stay tuned for exciting news.</p>
        </DialogBody>
        <DialogFooter>
          <Button onClick={()=>setIsOpen(!isOpen)} color="blue">Close</Button>
        </DialogFooter>
      </Dialog>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {new Date().getFullYear()} BrightSpend
      </Typography>
    </footer>
  );
}