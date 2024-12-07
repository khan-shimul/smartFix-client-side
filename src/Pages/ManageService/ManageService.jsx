import { useQuery } from "@tanstack/react-query";
import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import ManageServiceCard from "./ManageServiceCard";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useAuth();
  // Fetch data using query
  const {
    isPending,
    error,
    data: services,
    refetch,
  } = useQuery({
    queryKey: ["manageService"],
    queryFn: async () => {
      const response = await axios.get(
        `https://smart-fix-server-side.vercel.app/manage-service?email=${user.email}`
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
          .delete(`https://smart-fix-server-side.vercel.app/service/${id}`)
          .then((response) => {
            if (response.data.deletedCount) {
              swal("Your service has been deleted", {
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => toast.error(error));
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>SmartFix | Manage Service</title>
      </Helmet>
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
