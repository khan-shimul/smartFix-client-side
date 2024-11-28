import { useForm } from "react-hook-form";
import PageHeader from "../Shared/PageHeader/PageHeader";
import useAuth from "../../hooks/useAuth";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const handleAddService = (data) => {
    const service = {
      ...data,
      providerName: user.displayName,
      providerEmail: user.email,
      providerImage: user.photoURL,
    };
    console.log("data", data, "service:", service);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader>Add Service</PageHeader>
      <section className="max-w-7xl mx-auto my-10">
        <div className="text-center">
          <h4 className="text-3xl font-bold text-orange">
            Showcase Your Expertise!
          </h4>
          <h6 className="text-sm text-gray my-2">
            List your repair services and connect with customers
          </h6>
          <div className="h-1 w-16 bg-orange-500 mx-auto mb-5"></div>
        </div>
        <div className="mx-5 md:mx-10">
          <form onSubmit={handleSubmit(handleAddService)}>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-7">
              <div className="md:w-1/2">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
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
                type="text"
                placeholder="description"
                className="textarea textarea-bordered textarea-lg h-44 pl-4 w-full"
                {...register("description")}
              />
            </div>
            <div className="flex justify-center">
              <input
                className="mt-5 btn border-0  px-10 text-white bg-gradient-to-r from-[#FF6635] from-30% to-[#FF8A53] rounded-none transition-all duration-500 hover:-translate-y-2 w-full"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddService;
