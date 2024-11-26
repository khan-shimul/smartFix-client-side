import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg flex mx-auto py-60"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} />;
};

ProtectRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectRouter;
