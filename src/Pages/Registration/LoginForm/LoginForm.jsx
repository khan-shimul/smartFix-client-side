import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { FaFacebookF, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const LoginForm = ({ setIsOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAuthentication = (data) => {
    // setIsOpen(false);
    if (isRegister) {
      console.log("Trying to Registration", data);
    } else {
      console.log("Trying to login", data);
    }
  };

  return (
    <div className="pb-10">
      <form onSubmit={handleSubmit(handleAuthentication)}>
        {isRegister && (
          <>
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                className="input input-bordered w-full"
                {...register("name")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                required
                type="text"
                placeholder="photo url"
                className="input input-bordered w-full"
                {...register("photoUrl")}
              />
            </div>
          </>
        )}
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
            className="mt-5 btn border-0  px-10 text-white bg-gradient-to-r from-[#FF6635] from-30% to-[#FF8A53] rounded-none transition-all duration-500 hover:-translate-y-2"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <div className="mt-4">
        <h3 className="text-center text-sm text-gray mb-3">Or Login With</h3>
        <div className="flex items-center justify-center gap-3 mt-3">
          <button className="btn rounded-full text-blueDark">
            <FaFacebookF />
          </button>
          <button className="btn rounded-full">
            <FcGoogle />
          </button>
          <button className="btn text-lg rounded-full text-blueDark">
            <IoLogoGithub />
          </button>
        </div>
        {isRegister ? (
          <h2 className="text-center text-sm mt-4 text-gray">
            Already have an account?{" "}
            <span
              onClick={() => setIsRegister(false)}
              className="text-orange cursor-pointer"
            >
              Login
            </span>
          </h2>
        ) : (
          <h2 className="text-center text-sm mt-4 text-gray">
            Do not have account?{" "}
            <span
              onClick={() => setIsRegister(true)}
              className="text-orange cursor-pointer"
            >
              Register
            </span>
          </h2>
        )}
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default LoginForm;
