import { IoMdCheckmark } from "react-icons/io";
import img from "../../../assets/Images/Banner/about.jpg";
import ButtonOrange from "../../Shared/ButtonOrange/ButtonOrange";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from "react-countup";

const About = () => {
  const aboutList = [
    "Easy online booking and repair tracking",
    "Reduces in-person visits with online diagnostics",
    "Transparent pricing and service estimates",
    "Real-time updates on repair status",
  ];
  return (
    <section className="bg-[#F9F9F9] dark:bg-[#030304] p-5 md:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5 md:gap-16">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="lg:w-1/2 relative"
        >
          <img src={img} alt="" />
          <div className="bg-white dark:bg-[#030304] h-36 w-48 flex flex-col justify-center items-center gap-2 absolute bottom-4 left-4">
            <h2 className="text-5xl font-semibold dark:text-white">
              <CountUp start={0} end={27} duration={20} />{" "}
              <sup className="text-orange font-normal">+</sup>
            </h2>
            <p className="text-sm text-gray dark:text-white">
              Years Experience
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="lg:w-1/2 space-y-4"
        >
          <h4 className="text-orange text-lg font-medium uppercase">
            About Smart Fix
          </h4>
          <h2 className="text-blueDark dark:text-white font-semibold text-5xl leading-tight">
            Repairing Electronics Got Even Better
          </h2>
          <div>
            <p className="text-gray dark:text-white text-sm leading-7 mb-5">
              We allow users to diagnose issues, schedule repairs, track status,
              and access troubleshooting resources. It enhances customer
              convenience and boosts operational efficiency for repair
              businesses.
            </p>
            <ul>
              {aboutList.map((item, index) => (
                <li className="flex items-center gap-5 my-3" key={index}>
                  <IoMdCheckmark className="text-orange text-xl" />
                  <span className="text-sm text-gray dark:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ButtonOrange>
            Read More <FaArrowRightLong className="text-xl" />
          </ButtonOrange>
        </div>
      </div>
    </section>
  );
};

export default About;
