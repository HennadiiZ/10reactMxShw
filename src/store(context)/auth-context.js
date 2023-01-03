import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProviders = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const storeUserLoggedInformation = localStorage.getItem('isLoggedIn');
  
      if (storeUserLoggedInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);

    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

    const loginHandler = () => {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', '1');
    };

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
      { props.children }
    </AuthContext.Provider>
}

export default AuthContext;