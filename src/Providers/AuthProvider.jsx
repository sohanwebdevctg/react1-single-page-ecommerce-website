import { useEffect, useState } from "react";
import { createContext } from "react";
import { getUser } from "../utilities/localstorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  // user data
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUser(userInfo)
  },[setUser])

  const information = {user, setUser}


  return (
    <AuthContext.Provider value={information}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;