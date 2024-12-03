import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthContext";
import { useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Register User
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google Login
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // update user Photo and Name
  const setUserPhotoAndName = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   Logout user
  const logOUtUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Observing the user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Observing the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
      const user = { email: currentUser?.email };
      if (currentUser) {
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
      } else {
        axios.post("http://localhost:5000/logout", user).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    registerUser,
    loginUser,
    loginWithGoogle,
    logOUtUser,
    setUserPhotoAndName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
