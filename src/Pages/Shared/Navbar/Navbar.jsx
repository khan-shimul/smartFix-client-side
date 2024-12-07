import { Link, NavLink } from "react-router-dom";
import ButtonOrange from "../ButtonOrange/ButtonOrange";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, logOUtUser } = useAuth();
  // implement dark mode
  console.log(darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#030304";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#fff";
    }
  }, [darkMode]);

  // Logout handler
  const handleLogout = () => {
    logOUtUser()
      .then(() => {
        toast.success("You're logged out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Scroll handler for Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Nav Links
  const navMenu = (
    <>
      <li className="transition-all duration-300 hover:text-orange">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="transition-all duration-300 hover:text-orange">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange" : ""
          }
        >
          Services
        </NavLink>
      </li>
      {/* Dashboard */}
      {user && (
        <li>
          <details>
            <summary className="transition-all duration-300 hover:text-orange">
              Dashboard
            </summary>
            <ul className="p-2 w-[180px] text-blueDark dark:bg-[#030304] dark:text-white">
              <li className="transition-all duration-300 hover:text-orange text-sm">
                <NavLink
                  to="/add-service"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li className="transition-all duration-300 hover:text-orange text-sm">
                <NavLink
                  to="/manage-service"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                >
                  Manage Service
                </NavLink>
              </li>
              <li className="transition-all duration-300 hover:text-orange text-sm">
                <NavLink
                  to="/booked-service"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                >
                  Booked-Services
                </NavLink>
              </li>
              <li className="transition-all duration-300 hover:text-orange text-sm">
                <NavLink
                  to="/service-to-do"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                >
                  Service-To-Do
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );
  return (
    <nav
      className={`navbar px-5 md:px-10 top-0 z-30 ease-out transition-all duration-500 ${
        scrolled
          ? "fixed bg-[#F9F9F9]/90 dark:bg-[#030304]/90 shadow-lg py-5"
          : "bg-transparent py-7 absolute"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown z-30">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-[#F9F9F9] dark:bg-[#030304] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 dark:text-white text-blueDark
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-blueDark dark:text-white dark:bg-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link
          to="/"
          className={`btn btn-ghost text-lg md:text-3xl ${
            scrolled ? "text-blueDark dark:text-white" : "text-white"
          }`}
        >
          Smart<span className="text-orange">Fix</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-30">
        <ul
          className={`menu menu-horizontal px-1 text-lg font-medium ${
            scrolled ? "text-blueDark dark:text-white" : "text-white"
          }`}
        >
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5">
          <label className="grid cursor-pointer place-items-center">
            <input
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  title={user?.displayName}
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-[#030304] dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between mt-3">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li className="mt-2">
                <div onClick={handleLogout}>
                  <ButtonOrange>Logout</ButtonOrange>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <ButtonOrange>Login</ButtonOrange>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
