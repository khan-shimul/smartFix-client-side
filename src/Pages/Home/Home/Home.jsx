import About from "../About/About";
import Banner from "../Banner/Banner";
import MoreDetail from "../MoreDetail/MoreDetail";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <PopularServices />
      <MoreDetail />
    </div>
  );
};

export default Home;
