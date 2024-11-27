import { useLoaderData } from "react-router-dom";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
  const loadedServices = useLoaderData();
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-0 my-10 lg:my-16">
      <div className="text-center mb-8 md:mb-14">
        <h6 className="text-sm font-semibold text-blueDark">ELECTRONICS</h6>
        <h2 className="font-bold text-orange text-4xl md:text-5xl my-3">
          Popular Services
        </h2>
        <p className="lg:w-3/5 mx-auto text-gray text-sm md:text-base">
          Trusted solutions for all your electronics needs—fast, efficient, and
          affordable. From repairs to upgrades, we have got your electronics
          covered.
        </p>
        <div className="w-24 h-1 bg-orange-600 flex mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {loadedServices.slice(0, 6).map((service) => (
          <PopularServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
