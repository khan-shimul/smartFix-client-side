import { useLoaderData, useNavigate } from "react-router-dom";
import PageHeader from "../Shared/PageHeader/PageHeader";
import { MdOutlineLocationOn } from "react-icons/md";
import ButtonOrange from "../Shared/ButtonOrange/ButtonOrange";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const ServiceDetails = () => {
  const { user } = useAuth();
  const service = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    imgURL,
    serviceName,
    price,
    serviceArea,
    description,
    providerImage,
    providerName,
  } = service;
  // Booked Service Handler
  const handleBookedService = async () => {
    const bookingService = {
      ...service,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      status: "pending",
    };
    // Booked service send to server
    const response = await axios.post(
      "https://smart-fix-server-side.vercel.app/booking-service",
      bookingService
    );
    if (response.data.insertedId) {
      swal(
        "Thank you for booking!",
        "Your appointment is confirmed. Stay with Smart Fix",
        "success"
      ).then(() => navigate("/booked-service"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader>Service Details</PageHeader>
      <div className="max-w-7xl mx-auto py-14 px-5 md:px-7">
        <div className="flex bg-white flex-col lg:flex-row lg:items-center gap-14 rounded-lg shadow-lg">
          <div className="lg:w-1/2 lg:h-[470px]">
            <img className="w-full h-full rounded-lg" src={imgURL} alt="" />
          </div>
          <div className="lg:w-1/2 pb-7 md:pb-10 md:pt-10 pr-5 md:pr-10 pl-6 lg:pl-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 font-medium">
                <img
                  className="w-16 h-16 rounded-full"
                  src={providerImage}
                  alt={providerName}
                />
                <div>
                  <p className="text-2xl text-blueDark mb-1">{providerName}</p>
                  <div className="flex items-center gap-1 ">
                    <MdOutlineLocationOn className="text-xl " />
                    <h5 className="font-medium text-sm text-orange">
                      {serviceArea}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h6 className="text-sm text-blueDark">Price</h6>
                <h5 className="text-orange text-2xl font-medium">${price}</h5>
              </div>
            </div>
            <h2 className="card-title text-3xl md:text-5xl text-blueDark mt-8 leading-tight mb-4">
              {serviceName}
            </h2>
            <p className="text-gray text-lg leading-8">{description}</p>
            <span onClick={() => handleBookedService(_id)} className="mt-6">
              <ButtonOrange>Book Now</ButtonOrange>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
