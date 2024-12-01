import PropTypes from "prop-types";

const BookingService = ({
  bookingService,
  idx,
  handleRemoveBookingService,
}) => {
  const {
    _id,
    imgURL,
    serviceName,
    price,
    status,
    serviceArea,
    providerImage,
    providerName,
  } = bookingService;
  return (
    <tr>
      <td className="font-medium">{idx + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-lg h-24 w-24 mr-3">
              <img src={imgURL} alt={serviceName} />
            </div>
          </div>
          <div>
            <div className="font-bold text-blueDark">{serviceName}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={providerImage} alt={providerName} />
            </div>
          </div>
          <div>
            <div className="font-bold text-blueDark">{providerName}</div>
            <div className="text-sm opacity-50 ">{serviceArea}</div>
          </div>
        </div>
      </td>
      <td>{status}</td>
      <th>
        <button
          onClick={() => handleRemoveBookingService(_id)}
          className="btn btn-ghost btn-xs text-orange"
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

BookingService.propTypes = {
  bookingService: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleRemoveBookingService: PropTypes.func.isRequired,
};

export default BookingService;
