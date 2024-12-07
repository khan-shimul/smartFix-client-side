import About from "../About/About";
import Banner from "../Banner/Banner";
import Faq from "../FAQ/FAQ";
import MoreDetail from "../MoreDetail/MoreDetail";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <PopularServices />
      <MoreDetail />
      <Faq />
    </div>
  );
};

export default Home;
