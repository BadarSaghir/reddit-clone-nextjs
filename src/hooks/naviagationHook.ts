import { signOut } from "firebase/auth";
import { Reducer, useReducer } from "react";
import { setUserInfo } from "../features/modal/Auth/userInfoSlice";
import { auth } from "../firebase/clientApp";
import { useAppDispatch } from "./hooks";

interface Action {
    type: 'logout' | 'profile';
  }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface State {
  value:number
  
  }
  
const initialState: State = { 
  value:0
 };
  
  const reducer:Reducer<State,Action> = (state, action) => {
    switch (action.type) {
      case 'logout':
        signOut(auth)
        return state
      case 'profile':
        return state
      default:
        return state;
    }
  };
  // useReducer(reducer,initialState)
export  {reducer as navigationReducer, initialState as navigationInitialState}

  
