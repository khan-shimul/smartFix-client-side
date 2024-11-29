import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const ProtectRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // Conditionally Rendering
  if (loading) return <Spinner />;
  console.log("User:", user, "loading", loading);
  if (user) return children;
  return <Navigate to="/login" state={location} />;
};

ProtectRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectRouter;
