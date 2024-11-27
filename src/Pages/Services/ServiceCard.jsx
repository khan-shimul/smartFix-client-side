import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";

const ServiceCard = ({ service }) => {
  const {
    imgURL,
    serviceName,
    price,
    serviceArea,
    description,
    providerImage,
    providerName,
  } = service;
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-10">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-2/5">
          <figure className="lg:w-[500px] rounded-t-2xl lg:rounded-tr-none lg:rounded-s-2xl border-2 border-orange-600 ">
            <img
              className="transition-all duration-700 cursor-pointer hover:scale-110"
              src={imgURL}
              alt={serviceName}
            />
          </figure>
        </div>
        <div className="card-body lg:p-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 font-medium">
              <img
                className="w-14 h-14 rounded-full"
                src={providerImage}
                alt={providerName}
              />
              <div>
                <p className="text-base text-blueDark">Service Provider</p>
                <p className="text-orange text-base font-medium">
                  {providerName}
                </p>
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
          <p className="text-gray text-sm leading-6">
            {description.slice(0, 100)}...{" "}
            <span className="cursor-pointer text-orange font-semibold ml-1 btn-link">
              View Details
            </span>
          </p>
          <div className="flex items-center gap-3">
            <MdOutlineLocationOn className="text-xl text-blueDark" />
            <h5 className="font-medium text-gray">{serviceArea}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
