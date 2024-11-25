import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { FaCircleUser } from "react-icons/fa6";
import img from "../../../assets/Images/Banner/login.png";

const Login = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min-w-[380px] md:min-w-[650px] lg:min-w-[950px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all flex flex-col lg:flex-row gap-6">
                  <div className="bg-[#EDF0F5] flex justify-center items-center lg:w-1/2">
                    <img
                      className="h-[250px] md:h-[350px] lg:h-[350px]"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="py-6 pl-6 lg:pl-0 pr-6 lg:w-1/2">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 flex flex-col justify-center items-center"
                    >
                      <FaCircleUser className="text-7xl text-orange" />
                      <h2 className=" mt-2 font-semibold text-xl">LOGIN</h2>
                    </Dialog.Title>
                    <div className="mt-2 ">
                      {isOpen && <LoginForm setIsOpen={setIsOpen} />}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Login;
