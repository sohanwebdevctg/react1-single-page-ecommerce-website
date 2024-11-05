import { useState } from "react";
import { createContext } from "react";
import { getUser } from "../utilities/localstorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  // user data
  const [user, setUser] = useState(() => getUser())


  const information = {user}


  return (
    <AuthContext.Provider value={information}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;