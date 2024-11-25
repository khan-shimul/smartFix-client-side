import PropTypes from "prop-types";

const ButtonOrange = ({ children }) => {
  // console.log(children);
  return (
    <button
      className={`btn border-0  px-7 text-white bg-gradient-to-r from-[#FF6635] from-30% to-[#FF8A53] rounded-none transition-all duration-500 hover:-translate-y-2`}
    >
      {children}
    </button>
  );
};

ButtonOrange.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonOrange;
