import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const ProtectRouter = ({ children }) => {
  const { user, loading } = useAuth();

  if (user) {
    return children;
  }
};

ProtectRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectRouter;
