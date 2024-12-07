import { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import swal from "sweetalert";

const UpdateServiceFormModal = ({ isOpen, setIsOpen, manageService }) => {
  const { _id, imgURL, serviceName, price, serviceArea, description } =
    manageService;
  const { register, handleSubmit } = useForm();
  // Service update handler
  const handleUpdateService = async (data) => {
    setIsOpen(false);
    const updateService = data;
    try {
      const response = await axios.patch(
        `https://smart-fix-server-side.vercel.app/update-service/${_id}`,
        updateService
      );
      if (response.data.modifiedCount) {
        swal("Good job!", "Your service has been updated.", "success").then(
          () => window.location.reload()
        );
      }
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };
  return (
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
              <Dialog.Panel className="border-2 md:w-3/4 p-5 lg:p-10 transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <div>
                    <div className="text-center px-5 mb-7">
                      <h4 className="text-2xl md:text-3xl font-bold text-orange">
                        Update Your Service Details
                      </h4>
                      <h6 className="text-xs md:text-sm text-gray my-2">
                        Make updates to enhance visibility, accuracy, and
                        efficiency.
                      </h6>
                    </div>
                    <div className="mx-5 md:mx-10">
                      <form onSubmit={handleSubmit(handleUpdateService)}>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-7">
                          <div className="md:w-1/2">
                            <label className="label">
                              <span className="label-text">Image URL</span>
                            </label>
                            <input
                              defaultValue={imgURL}
                              required
                              type="text"
                              placeholder="image url"
                              className="input input-bordered w-full"
                              {...register("imgURL")}
                            />
                          </div>
                          <div className="md:w-1/2">
                            <label className="label">
                              <span className="label-text">Service Name</span>
                            </label>
                            <input
                              required
                              defaultValue={serviceName}
                              type="text"
                              placeholder="service name"
                              className="input input-bordered w-full"
                              {...register("serviceName")}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-7 md:my-2">
                          <div className="md:w-1/2">
                            <label className="label">
                              <span className="label-text">Price</span>
                            </label>
                            <input
                              required
                              defaultValue={price}
                              type="number"
                              placeholder="price"
                              className="input input-bordered w-full"
                              {...register("price")}
                            />
                          </div>
                          <div className="md:w-1/2">
                            <label className="label">
                              <span className="label-text">Service Area</span>
                            </label>
                            <input
                              required
                              defaultValue={serviceArea}
                              type="text"
                              placeholder="service area"
                              className="input input-bordered w-full"
                              {...register("serviceArea")}
                            />
                          </div>
                        </div>
                        <div className="">
                          <label className="label">
                            <span className="label-text">Description</span>
                          </label>
                          <textarea
                            required
                            defaultValue={description}
                            type="text"
                            placeholder="description"
                            className="textarea textarea-bordered textarea-lg h-44 pl-4 w-full"
                            {...register("description")}
                          />
                        </div>
                        <div className="mb-5">
                          <input
                            className="mt-8 btn border-0  px-10 text-white bg-gradient-to-r from-[#FF6635] from-30% to-[#FF8A53] rounded-none transition-all duration-500 hover:-translate-y-2 w-full"
                            type="submit"
                            value={"Update Service"}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateServiceFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  manageService: PropTypes.object.isRequired,
};

export default UpdateServiceFormModal;
