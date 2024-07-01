import { useState } from "react";
import Logo from "../assets/BrightSpend.png";
import { Typography, Input, Button } from "@material-tailwind/react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);


  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:flex block">
      <div className="md:block hidden w-full relative">
        <img
          src="https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" object-cover h-screen w-full"
          draggable={false}
        />
        <div className="absolute top-1/3 md:block hidden left-16 w-10/12">
          <h1 className="font-semibold text-3xl text-white pb-5 opacity-85">Fan Fact:</h1>
          <p className="text-xl text-white italic opacity-85">Did you know that Only 39% of adults in Kenya are considered financially literate, highlighting a significant gap in financial education." - FSD Kenya, 2016</p>
        </div>
      </div>
      <section className="grid text-center h-screen items-center p-8 md:min-w-[25rem] w-full">
        <div className="">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            <Link to="/">
            <img
                src={Logo}
                alt=""
                className="md:absolute md:left-8 md:top-5 md:-translate-x-0 md:h-16 h-20 rounded-ful hover:animate-pulse relative left-1/2 -translate-x-1/2 rounded-full border border-black md:border-0 p-2 md:p-0"
              />
            </Link>
            Login
          </Typography>
          <div className="mx-auto max-w-[24rem] text-left">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    className={`mb-2 block font-medium ${
                      errors.email ? "text-red-400" : "text-gray-900"
                    }`}
                  >
                    {errors.email ? errors.email.message : "Email"}
                  </Typography>
                </label>
                <Input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                 
                  placeholder="mail@example.com"
                  className="!border !border-zinc-700 bg-white text-gray-900 focus:shadow-sm h-[45px] shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:border-2"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    className={`mb-2 block font-medium ${
                      errors.password ? "text-red-400" : "text-gray-900"
                    }`}
                  >
                    {errors.password ? errors.password.message : "Password"}
                  </Typography>
                </label>
                <Input
                  size="lg"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="********"
                  className="!border !border-zinc-700 bg-white text-gray-900 focus:shadow-sm h-[45px] shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:border-2"
                  labelProps={{
                    className: "hidden",
                  }}
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <IoEye className="h-5 w-5" />
                      ) : (
                        <IoEyeOff className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
              </div>
              <Button
                size="lg"
                className="mt-6 bg-blue-400"
                type="submit"
                fullWidth
              >
                sign in
              </Button>
            </form>
            <div className="!mt-4 flex justify-end">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                variant="small"
                className="font-medium"
              >
                Forgot password
              </Typography>
            </div>
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />{" "}
              sign in with google
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal"
            >
              Not registered?{" "}
              <Link to="/register" className="font-medium text-blue-400">
                Create account
              </Link>
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
