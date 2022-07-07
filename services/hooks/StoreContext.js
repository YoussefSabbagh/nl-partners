import React, { createContext, useState } from 'react';
import HomeFinder from '../apis/Home';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [pages, setPages] = useState('Home');
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const checkAuthenticated = async () => {
    try {
      const data = await HomeFinder.home();

      if (data.success) {
        setCurrentUser((p) => data.data);

        setIsAuthenticated(true);
      } else {
        setCurrentUser({});
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  };

  const value = {
    pages,
    setPages,
    setCurrentUser,
    currentUser,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthenticated,
    setAuth,
    logout,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreContextProvider;
