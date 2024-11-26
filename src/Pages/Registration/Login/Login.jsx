import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaCircleUser,
  FaFacebookF,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Handling Registration
    // Handling Login
    loginUser(data.email, data.password)
      .then((res) => {
        if (res.user) {
          toast.success("Successfully Login to your account");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse gap-0 lg:gap-6">
        <div className="bg-gradient-to-t from-[#FF6635] from-40% to-[#FF8A53] flex flex-col justify-center items-center lg:w-1/2 ">
          <div className="p-10 text-center text-white lg:-mt-36">
            <h3 className="font-bold text-2xl md:text-4xl">
              Welcome to Smart Fix
            </h3>
            <p className="mt-2 text-sm">Do not have an account?</p>
            <Link to="/register">
              <button className="btn mt-4 btn-outline text-white px-10">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-10 md:p-16">
          <div className="text-lg font-medium leading-6 text-gray-900 flex flex-col justify-center items-center">
            <FaCircleUser className="text-7xl text-orange" />
            <h2 className=" mt-2 font-semibold text-lg">Login Your Account</h2>
          </div>
          <div className="mt-2 ">
            <div className="pb-10">
              <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    {...register("email")}
                  />
                </div>
                <div className="mt-2">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered w-full"
                      {...register("password")}
                    />
                    {showPassword ? (
                      <FaRegEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-4 text-gray cursor-pointer"
                      />
                    ) : (
                      <FaRegEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-4 text-gray cursor-pointer"
                      />
                    )}
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <div className="flex justify-center">
                  <input
                    className="mt-5 btn border-0  px-10 text-white bg-gradient-to-r from-[#FF6635] from-30% to-[#FF8A53] rounded-none transition-all duration-500 hover:-translate-y-2 w-full"
                    type="submit"
                    value={"Login"}
                  />
                </div>
              </form>
              <div className="mt-4">
                <h3 className="text-center text-sm text-gray mb-3">
                  Or Continue With
                </h3>
                <div className="flex flex-col items-center justify-center gap-3 mt-3">
                  <button className="btn text-blueDark w-full lg:w-1/2">
                    <FaFacebookF /> Continue with Facebook
                  </button>
                  <button className="btn text-blueDark w-full lg:w-1/2">
                    <FcGoogle /> Continue with Google
                  </button>
                  <button className="btn text-blueDark w-full lg:w-1/2">
                    <IoLogoGithub /> Continue with Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Login;
