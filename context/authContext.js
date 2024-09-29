import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
   
    //setTimeout(() => {
        setIsAuthenticated(false);
    //}, 2000);
  }, []);

  const login = async (email , password) => {
    try {
      // Implement login logic here
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
     
    } catch (e) {
      console.error(e);
    }
  };

  const register = async () => {
    try {
      // Implement registration logic here
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be provided inside AuthContextProvider");
  }
  return value;
};

