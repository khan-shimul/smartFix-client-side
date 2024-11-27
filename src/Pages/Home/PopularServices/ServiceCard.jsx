import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const {
    serviceName,
    imgURL,
    description,
    providerImage,
    providerName,
    price,
  } = service;
  return (
    <div className="card rounded-none bg-base-100 shadow-xl">
      <div className="relative">
        <figure className="border-2 border-orange-600 ">
          <img
            className="w-full transition-all duration-500 hover:scale-110"
            src={imgURL}
            alt="Shoes"
          />
        </figure>
        <div className="w-full absolute -bottom-6 flex justify-center">
          <h2 className="w-2/3 bg-gray-100 text-center p-4 font-semibold text-blueDark">
            {serviceName}
          </h2>
        </div>
      </div>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 font-medium mt-4">
            <img
              className="w-12 h-12 rounded-full"
              src={providerImage}
              alt=""
            />
            <div>
              <p className="text-sm text-orange">Service Provider</p>
              <p className="text-blueDark font-medium">{providerName}</p>
            </div>
          </div>
          <div className="">
            <h6 className="text-sm text-orange">Price</h6>
            <h5 className="text-blueDark font-medium">${price}</h5>
          </div>
        </div>
        <p className="text-gray text-sm leading-6">
          {description.slice(0, 100)}...{" "}
          <span className="cursor-pointer text-orange font-semibold ml-1 btn-link">
            View Details
          </span>
        </p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
