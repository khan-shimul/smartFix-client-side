import { useQuery } from "@tanstack/react-query";
import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import TodoService from "./TodoService";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const ToDoServices = () => {
  const { user } = useAuth();
  const {
    isPending,
    data: todoServices,
    refetch,
  } = useQuery({
    queryKey: ["todoServices"],
    queryFn: async () => {
      const response = await axios.get(
        `https://smart-fix-server-side.vercel.app/services-to-do?email=${user.email}`
      );
      return response.data;
    },
  });
  if (isPending) return <Spinner />;
  // Status Change Handler
  const handleStatus = async (status, id) => {
    const newStatus = { status };
    const response = await axios.patch(
      `https://smart-fix-server-side.vercel.app/services-to-do/${id}`,
      newStatus
    );
    if (response.data.modifiedCount) {
      swal("Todo-Task", "Successfully modified", "success");
      refetch();
    }
  };
  // Booking Service Remove Handler
  const handleRemoveTodoService = (id) => {
    swal({
      title: "Are you sure you?",
      text: "This action is permanent and cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await axios.delete(
          `https://smart-fix-server-side.vercel.app/service-to-do/${id}`
        );
        if (response.data.deletedCount) {
          swal(
            "Service Successfully Removed",
            "The selected service has been removed from your dashboard.",
            "success"
          );
          refetch();
        }
      }
    });
  };
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>SmartFix | To-Do Service</title>
      </Helmet>
      <PageHeader>Service To-Do</PageHeader>
      <section className="max-w-7xl mx-auto min-h-screen">
        <div className="mt-12 px-5 md:px-10">
          {!todoServices.length ? (
            <>
              <h2 className="text-3xl text-orange text-center font-semibold">
                Oops!! No Booked Services Found
              </h2>
              <div className="lg:w-3/5 flex flex-col mx-auto text-center mt-2">
                <p className=" text-gray mb-5">
                  You haven’t received any bookings yet. Check back later!
                </p>
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-3xl text-orange text-center font-semibold">
                Service Bookings Dashboard
              </h2>
              <div className="lg:w-3/5 text-sm flex flex-col mx-auto text-center mt-1">
                <p className=" text-gray">
                  Track, Update, and Review Your Customer Bookings Effortlessly.
                </p>
              </div>
              {/* <div className="h-1 w-16 bg-orange-600 flex mx-auto mb-16 mt-2"></div> */}
              <div className="overflow-x-auto overflow-y-hidden pt-12 pb-16">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>Service</th>
                      <th>Customer</th>
                      <th>Action</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoServices.map((todoService, idx) => (
                      <TodoService
                        idx={idx}
                        key={todoService._id}
                        todoService={todoService}
                        handleStatus={handleStatus}
                        handleRemoveTodoService={handleRemoveTodoService}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToDoServices;
