import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import Spinner from "../Shared/Spinner/Spinner";
import ServiceCard from "./ServiceCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ButtonOrange from "../Shared/ButtonOrange/ButtonOrange";
import { useForm } from "react-hook-form";

const Services = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5000/services`);
      return result.data;
    },
  });
  // Search Handler
  const handleSearch = async (data) => {
    const response = await axios.get(
      `http://localhost:5000/services?search=${data.searchText}`
    );
    queryClient.setQueryData(["services"], () => {
      return response.data;
    });
  };
  // Showing a spinner until data received
  if (isPending) return <Spinner />;
  if (error) {
    toast.error("Something went wrong:", error.message);
    return <Spinner />;
  }

  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader>Services</PageHeader>
      <div className="max-w-7xl mx-auto py-14 px-5 md:px-7">
        <div className="mb-10 flex flex-col md:flex-row-reverse items-center">
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex gap-2 w-full"
          >
            <div className="form-control flex-grow">
              <input
                {...register("searchText", { required: true })}
                type="text"
                placeholder="Search here..."
                className="input input-bordered w-auto"
              />
            </div>
            <div className="form-control">
              <span>
                <ButtonOrange>Search</ButtonOrange>
              </span>
            </div>
          </form>
          <div className="mt-5 md:mr-2 lg:mr-5 md:mt-0 md:w-3/6">
            <select className="select select-info w-full">
              <option disabled selected>
                Select Categories
              </option>
              <option>Screen Repair</option>
              <option>Smart Phone Repair</option>
              <option>Camera Repair</option>
              <option>Desktop Repair</option>
              <option>Others Repair</option>
            </select>
          </div>
        </div>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
