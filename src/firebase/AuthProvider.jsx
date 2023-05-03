import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // google sign up
  const googleProvider = new GoogleAuthProvider();
  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  // github sign up
  const githubProvider = new GithubAuthProvider();

  const githubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // email registration

  const emailRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   email sign in
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // getUserCurrentState

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    googleSignUp,
    user,
    githubSignUp,
    emailRegister,
    setUser,
    emailLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
