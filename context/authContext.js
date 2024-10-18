import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
   const unsub = onAuthStateChanged(auth, (user) => {
    if(user){
      setIsAuthenticated(true);
      setUser(user);
    }else{
      setIsAuthenticated(false);
      setUser(null);
    }
   });
   return unsub;
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
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log('response.user:', response?.user);

      await setDoc(doc(db, "users", response?.user?.uid),{
        username,
        profileurl,
        userId: response?.user?.uid
      });
      return {success: true , data: response?.user};

    } catch (e) {
      return{success: false , msg: e.message};
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

