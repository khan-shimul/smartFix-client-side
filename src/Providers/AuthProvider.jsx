import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = { name: "shimul", age: 24 };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
