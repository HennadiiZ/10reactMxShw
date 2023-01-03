import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store(context)/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* <Button onClick={props.onLogout}>Logout</Button> */}
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
