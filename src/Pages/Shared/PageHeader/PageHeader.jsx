import { Link } from "react-router-dom";
import imgBanner from "../../../assets/Images/Banner/shared.jpg";
import PropTypes from "prop-types";

const PageHeader = ({ children }) => {
  return (
    <div
      className="relative h-[200px] md:h-[300px] lg:h-[450px] bg-cover"
      style={{
        backgroundImage: `url(${imgBanner})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 text-white flex mt-24 md:mt-36 lg:mt-56 justify-center">
        <div>
          <h2 className="font-semibold text-3xl">{children}</h2>
          <p className="text-sm my-3 text-center">
            <Link to="/">
              <span className="cursor-pointer transition-all duration-300 hover:text-orange">
                Home
              </span>
            </Link>{" "}
            &gt; {children}
          </p>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageHeader;
