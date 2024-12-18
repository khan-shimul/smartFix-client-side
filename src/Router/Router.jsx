import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
import Login from "../Pages/Registration/Login/Login";
import Register from "../Pages/Registration/Register/Register";
import ProtectRouter from "./ProtectRouter";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ToDoServices from "../Pages/ToDoServices/ToDoServices";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://smart-fix-server-side.vercel.app/services"),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details/:id",
        element: (
          <ProtectRouter>
            <ServiceDetails />
          </ProtectRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://smart-fix-server-side.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/add-service",
        element: (
          <ProtectRouter>
            <AddService />
          </ProtectRouter>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <ProtectRouter>
            <ManageService />
          </ProtectRouter>
        ),
      },
      {
        path: "/booked-service",
        element: (
          <ProtectRouter>
            <BookedServices />
          </ProtectRouter>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <ProtectRouter>
            <ToDoServices />
          </ProtectRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
