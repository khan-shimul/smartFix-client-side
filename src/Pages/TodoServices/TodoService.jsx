import PropTypes from "prop-types";
import { useState } from "react";

const TodoService = ({ todoService, idx, handleRemoveTodoService }) => {
  const {
    _id,
    imgURL,
    serviceName,
    price,
    status,
    userName,
    userEmail,
    userPhoto,
  } = todoService;

  const [selectedStatus, setSelectedStatus] = useState(status);
  const handleStatus = (e) => {
    setSelectedStatus(e.target.value);
  };

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
            <div className="avatar rounded-lg h-12 w-12">
              <img src={userPhoto} alt={userName} />
            </div>
          </div>
          <div>
            <div className="font-bold text-blueDark">{userName}</div>
            <div className="text-sm opacity-50 ">{userEmail}</div>
          </div>
        </div>
      </td>
      <td>
        <select
          value={selectedStatus}
          onChange={handleStatus}
          className="select select-ghost"
        >
          <option
            value={selectedStatus}
            className="capitalize"
            disabled
            selected
          >
            {selectedStatus}
          </option>
          <option value="working" className="capitalize">
            working
          </option>
          <option className="completed">completed</option>
        </select>
      </td>
      <th>
        <button
          onClick={() => handleRemoveTodoService(_id)}
          className="btn btn-square btn-outline text-orange btn-sm hover:bg-orange-600 hover:border-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

TodoService.propTypes = {
  todoService: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleRemoveTodoService: PropTypes.func.isRequired,
};

export default TodoService;
