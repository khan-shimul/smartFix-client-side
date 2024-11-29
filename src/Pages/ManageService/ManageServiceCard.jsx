import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import ButtonOrange from "../Shared/ButtonOrange/ButtonOrange";
import UpdateServiceFormModal from "./UpdateServiceFormModal";
import axios from "axios";
import { useState } from "react";

const ManageServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [manageService, setManageService] = useState(null);
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
  //   Handle Update
  const handleUpdateService = async (id) => {
    setIsOpen(true);
    const response = await axios.get(`http://localhost:5000/service/${id}`);
    setManageService(response.data);
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-10">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-2/5 lg:mr-3">
          <figure className="lg:w-[500px] rounded-t-2xl lg:rounded-tr-none lg:rounded-s-2xl border-2 border-orange-600 ">
            <img
              className="transition-all duration-700 hover:scale-110"
              src={imgURL}
              alt={serviceName}
            />
          </figure>
        </div>
        <div className="card-body lg:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 font-medium">
              <img
                className="w-14 h-14 rounded-full"
                src={providerImage}
                alt={providerName}
              />
              <div>
                <p className="text-2xl text-orange">{providerName}</p>
                <div className="flex items-center gap-1 ">
                  <MdOutlineLocationOn className="text-xl " />
                  <h5 className="font-medium text-sm text-gray">
                    {serviceArea}
                  </h5>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className="text-base text-blueDark">Price</h6>
              <h5 className="text-orange text-base font-medium">${price}</h5>
            </div>
          </div>
          <h2 className="card-title text-2xl text-blueDark pt-4">
            {serviceName}
          </h2>
          <p className="text-gray text-sm leading-6">{description}</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 mt-5">
            <button
              onClick={() => handleUpdateService(_id)}
              className="btn btn-outline btn-info px-10"
            >
              Update
            </button>
            <ButtonOrange>Delete</ButtonOrange>
          </div>
        </div>
      </div>
      {isOpen && manageService && (
        <UpdateServiceFormModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          manageService={manageService}
        />
      )}
    </div>
  );
};

ManageServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ManageServiceCard;
