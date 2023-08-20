import { createContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { getMyData } from "api/auth";

const INITIAL_STATE = {
  username: localStorage.getItem("username") || null,
};

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        username: null,
      };
    case "LOGIN_SUCCESS":
      return {
        username: action.payload.username,
      };
    case "LOGIN_FAILURE":
      return {
        username: null,
      };
    case "LOGOUT":
      return {
        username: null,
      };
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    getMyData(token).then((res) => setUser(res));
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        username: state.username,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
