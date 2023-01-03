import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './store(context)/auth-context';

function App() {
  const ctx = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storeUserLoggedInformation = localStorage.getItem('isLoggedIn');

  //   if (storeUserLoggedInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []); //

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   // localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   // localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
       {/* <AuthContext.Provider> */}
       {/* <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout:logoutHandler }}>  */}
        {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
        {/* <MainHeader  onLogout={logoutHandler} /> */}
        <MainHeader />
        <main>
          {/* {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />} */}
          {!ctx.isLoggedIn && <Login/>}
          {ctx.isLoggedIn && <Home/>}
        </main>
      {/* </AuthContext.Provider>   */}
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
