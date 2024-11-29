import { useQuery } from "@tanstack/react-query";
import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import ManageServiceCard from "./ManageServiceCard";
import toast from "react-hot-toast";

const ManageService = () => {
  const { user } = useAuth();
  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["manageService"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/manage-service?email=${user.email}`
      );
      return response.data;
    },
  });
  if (isPending) return <Spinner />;
  if (error) return toast.error("something went wrong");
  return (
    <div>
      <PageHeader>Manage Service</PageHeader>
      <div>
        <div className="max-w-7xl mx-auto py-14 px-5 md:pl-8">
          {services.map((service) => (
            <ManageServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
