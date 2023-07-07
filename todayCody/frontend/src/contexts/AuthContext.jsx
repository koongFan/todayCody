import { createContext, useState, useEffect } from "react";
import { getAuthToken } from "util/auth";
import { getMyData } from "../api/auth";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  const token = getAuthToken();

  useEffect(() => {
    getMyData(token).then((res) => setUser(res));
  }, [token]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// export function useAuthContext() {
//   useContext(AuthContext);
// }
