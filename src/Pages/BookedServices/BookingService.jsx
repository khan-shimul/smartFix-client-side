import PropTypes from "prop-types";

const BookingService = ({ bookingService, idx }) => {
  const {
    imgURL,
    serviceName,
    price,
    serviceArea,
    providerImage,
    providerName,
  } = bookingService;
  return (
    <tr className="hover">
      <td>{idx + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-lg h-24 w-24">
              <img src={imgURL} alt={serviceName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
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
            <div className="font-bold">{providerName}</div>
            <div className="text-sm opacity-50">{serviceArea}</div>
          </div>
        </div>
      </td>
      <td>Pending</td>
      <th>
        <button className="btn btn-ghost btn-xs text-orange">Remove</button>
      </th>
    </tr>
  );
};

BookingService.propTypes = {
  bookingService: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default BookingService;
