import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  SET_EMAIL,
  SET_PASSWORD,
  USER_VALIDATED,
  USER_INVALIDATED,
  SET_USERS
} from "../types";
import TrustedPage from "../../components/pages/TrustedPage";

const AuthState = props => {
  const initialState = {
    formUsers: [
      {
        id: 1,
        email: "kacper.sionkowski@gmail.com",
        password: "haslo123"
      },
      {
        id: 2,
        email: "kacper.sionkowski@topmail.com",
        password: "samolot123"
      }
    ],
    authorizationStatus: {
      status: false
    }
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //   Authenticate user
  const compareUserState = (userEmail, userPassword) => {
    var found = initialState.formUsers.some(
      initial =>
        initial.email === userEmail && initial.password === userPassword
    );

    if (found) {
      userValidated();
      console.log("Authenticated successfully");
    } else {
      userInvalidated();
      console.log("Authentication failed");
    }
  };


  // Validate user
  const userValidated = () => dispatch({ type: USER_VALIDATED });
  const userInvalidated = () => dispatch({ type: USER_INVALIDATED });

  return (
    <AuthContext.Provider
      value={{
        formUsers: state.formUsers,
        authorizationStatus: state.authorizationStatus.status,
        compareUserState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
