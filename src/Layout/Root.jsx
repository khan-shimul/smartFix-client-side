import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const hideLayoutPath = ["/login", "/register"];
  const shouldHideLayout = hideLayoutPath.includes(location.pathname);
  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Root;
