import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import {AuthContextProviders} from './store(context)/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProviders>
    <App />
  </AuthContextProviders>
);


// 10 Advanced_ Handling Side Effects, Using Reducers & Using the Context API
  // 111 Using the useEffect() Hook

  // 112 useEffect & Dependencies

  // 114 Using the useEffect Cleanup Function

  // 115 useEffect Summary

  // 116 Introducing useReducer & Reducers In General
  // 117 Using the useReducer() Hook

  // 118 useReducer & useEffect

  // //   120 useReducer vs useState for State Management

  // 121 Introducing React Context (Context API)

  // 122 Using the React Context API
      // AuthContext.Provider
      // AuthContext.Consumer


  // 123 Tapping Into Context with the useContext Hook
      // useContext()

  // 124 Making Context Dynamic

  // 125 Building & Using a Custom Context Provider Component

  // 126 React Context Limitations
  // 127 Learning the _Rules of Hooks_

  // 128 Refactoring an Input Component