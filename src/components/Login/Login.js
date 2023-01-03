import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@')};
  } 

  if ( action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6};
  } 

  if ( action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6};
  }
  return { value: '', isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  //-----------------------------------------------------------------------
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  //-----------------------------------------------------------------------

  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // });

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // }, []);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    // isValid: false,
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', 
    isValid: null,
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLENUP');
    }
  // }, [enteredPassword]);
  }, []);


  // useEffect(() => {
  //   // console.log('check');
  //   const identifier = setTimeout(() => {
  //     console.log('check');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     clearTimeout(identifier);
  //     console.log('clean');
  //   };
  // }, [setFormIsValid, enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // dispatchEmail('NEW_EMAIL_VALUE');
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      // event.target.value.includes('@') && enteredPassword.trim().length > 6
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      // event.target.value.trim().length > 6 && enteredEmail.includes('@')
      // event.target.value.trim().length > 6 && emailState.value.includes('@')
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    // setEmailIsValid(emailState.isValid);

    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(emailState.value, enteredPassword);
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            // emailIsValid === false ? classes.invalid : ''
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ''
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          {/* <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          /> */}
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
