import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  username: localStorage.getItem("username") || null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        username: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        username: action.payload.username,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        username: null,
      };
    case "LOGOUT":
      return {
        user: null,
        username: null,
      };
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // useEffect(() => {
  //   getMyData(token).then((res) => setUser(res));
  // }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        username: state.username,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
