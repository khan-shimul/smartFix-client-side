import { useQuery, useQueryClient } from "@tanstack/react-query";
import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import ManageServiceCard from "./ManageServiceCard";
import toast from "react-hot-toast";
import swal from "sweetalert";

const ManageService = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  // Fetch data using query
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
  // Handling loading & error
  if (isPending) return <Spinner />;
  if (error) return toast.error("something went wrong");
  // Service Delete Handler
  const handleDeleteService = (id) => {
    swal({
      title: "Are you sure you?",
      text: "This action is permanent and cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/service/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              queryClient.setQueryData(
                ["manageService"],
                (previousServices) => {
                  const remaining = previousServices.filter(
                    (service) => service._id !== id
                  );
                  return remaining;
                }
              );
              swal("Your service has been deleted", {
                icon: "success",
              });
            }
          })
          .catch((error) => toast.error(error));
      }
    });
  };
  return (
    <div>
      <PageHeader>Manage Service</PageHeader>
      <div>
        <div className="max-w-7xl mx-auto py-14 px-5 md:pl-8">
          {services.map((service) => (
            <ManageServiceCard
              key={service._id}
              service={service}
              handleDeleteService={handleDeleteService}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
