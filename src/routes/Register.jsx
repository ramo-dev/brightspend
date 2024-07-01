import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/BrightSpend.png";
import { Typography, Input, Button } from "@material-tailwind/react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NewUserContext } from "../components/hooks/NewUserContext";

export function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [form, setForm] = useState(null);
  const { newUser } = useContext(NewUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const toggleConfirmPasswordVisiblity = () =>
    setConfirmPasswordShown((cur) => !cur);

  const onSubmit = (data) => {
    console.log(data);
    setForm(data);
    handleRegister()
  };

  function handleRegister() {
    console.warn(form);
  }

  return (
    <div className="md:flex block">
      <div className="md:block hidden w-full relative">
        <img
          src="https://images.unsplash.com/photo-1557682268-e3955ed5d83f?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover h-screen w-full"
          draggable={false}
        />
        <div className="absolute top-1/3 md:block hidden left-16 w-10/12">
          <h1 className="font-semibold text-3xl text-white pb-5 opacity-85">Fan Fact:</h1>
          <p className="text-xl text-white italic opacity-85">In Kenya, approximately 22% of adults rely solely on informal financial services, which often lack the protections and benefits of formal banking." - FSD Kenya, 2016</p>
        </div>
      </div>
      <section className="grid text-center h-screen items-center p-8 md:min-w-[30rem] w-full">
        <div className="">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            <Link to="/">
              <img
                src={Logo}
                alt=""
                className="md:absolute md:left-8 md:top-5 md:-translate-x-0 md:h-16 h-20 rounded-ful hover:animate-pulse relative left-1/2 -translate-x-1/2 rounded-full border border-black md:border-0 p-2 md:p-0"
              />
            </Link>
            Sign Up
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-[24rem] text-left"
          >
            <div className="mb-6">
              <label htmlFor="name">
                <Typography
                  variant="small"
                  className={`mb-1 block font-medium ${
                    errors.name ? "text-red-400" : "text-gray-900"
                  } `}
                >
                  {errors.name ? errors.name.message : "Full Name"}
                </Typography>
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                className="!border !border-zinc-700 bg-white text-gray-900 focus:shadow-sm h-[45px] shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:border-2"
                labelProps={{
                  className: "hidden",
                }}
                {...register("name", { required: "Full name is required" })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className={`mb-1 block font-medium ${
                    errors.email ? "text-red-400" : "text-gray-900"
                  } `}
                >
                  {errors.email ? errors.email.message : "Email"}
                </Typography>
              </label>
              <Input
                type="email"
                defaultValue={newUser ? newUser : ""}
                placeholder="mail@example.com"
                className="!border !border-zinc-700 bg-white text-gray-900 focus:shadow-sm h-[45px] shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:border-2"
                labelProps={{
                  className: "hidden",
                }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className={`mb-1 block font-medium ${
                    errors.password ? "text-red-400" : "text-gray-900"
                  } `}
                >
                  {errors.password ? errors.password.message : "Password"}
                </Typography>
              </label>
              <Input
                size="lg"
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword">
                <Typography
                  variant="small"
                  className={`mb-1 block font-medium ${
                    errors.confirmPassword ? "text-red-400" : "text-gray-900"
                  } `}
                >
                  {errors.confirmPassword
                    ? errors.confirmPassword.message
                    : "Confirm Password"}
                </Typography>
              </label>
              <Input
                size="lg"
                placeholder="********"
                className={`!border !${
                  errors.confirmPassword ? "!border-red-600" : "border-blue-700"
                } bg-white text-gray-900 focus:shadow-sm h-[45px] shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:border-gray-900 focus:border-t-gray-900 focus:border-2`}
                labelProps={{
                  className: "hidden",
                }}
                type={confirmPasswordShown ? "text" : "password"}
                icon={
                  <i onClick={toggleConfirmPasswordVisiblity}>
                    {confirmPasswordShown ? (
                      <IoEye className="h-5 w-5" />
                    ) : (
                      <IoEyeOff className="h-5 w-5" />
                    )}
                  </i>
                }
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
            </div>
            <Button
              
              size="lg"
              className="mt-6 bg-blue-400"
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>
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
              Sign up with Google
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal"
            >
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-400">
                Login
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
