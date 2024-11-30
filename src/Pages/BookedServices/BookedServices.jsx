import { useQuery } from "@tanstack/react-query";
import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import ButtonOrange from "../Shared/ButtonOrange/ButtonOrange";
import BookingService from "./BookingService";

const BookedServices = () => {
  const { user } = useAuth();
  const {
    isPending,
    error,
    data: bookingServices,
  } = useQuery({
    queryKey: ["bookingServices"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/booking-services?email=${user.email}`
      );
      return response.data;
    },
  });
  console.log(isPending, error, bookingServices);
  if (isPending) return <Spinner />;
  return (
    <div className="bg-gray-50">
      <PageHeader>Booked Service</PageHeader>
      <section className="max-w-7xl mx-auto min-h-screen">
        <div className="my-14 px-5 md:px-10">
          {!bookingServices.length ? (
            <>
              <h2 className="text-3xl text-orange text-center font-semibold">
                Oops!! Nothing to show here
              </h2>
              <div className="lg:w-3/5 flex flex-col mx-auto text-center mt-2">
                <p className=" text-gray mb-5">
                  It looks like you have not booked any services with us yet.
                  Ready to get started? Check out our amazing services and find
                  the perfect fit for you.
                </p>
                <Link to="/services">
                  <ButtonOrange>Get Started</ButtonOrange>
                </Link>
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-3xl text-orange text-center font-semibold">
                Your Booked Services
              </h2>
              <div className="lg:w-3/5 text-sm flex flex-col mx-auto text-center mt-1 mb-7">
                <p className=" text-gray">
                  Here is a summary of the services you have booked with us. We
                  are excited to serve you!
                </p>
              </div>
              {/* <div className="h-1 w-16 bg-orange-600 flex mx-auto mb-16 mt-2"></div> */}
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Service</th>
                      <th>Provider</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingServices.map((bookingService, idx) => (
                      <BookingService
                        idx={idx}
                        key={bookingService._id}
                        bookingService={bookingService}
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

export default BookedServices;
