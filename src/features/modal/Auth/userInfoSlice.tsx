import {  createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';
import { auth } from '../../../firebase/clientApp';


export interface UserInfoState {
  user:User|null;
}

const initialState: UserInfoState = {
  user:auth.currentUser
}



export const UserInfoSlice = createSlice({
  name: ' UserInfo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   
    setUserInfo(state,action:PayloadAction<User>){
        state.user =action.payload  
    }
   
  },
 

})
export const {setUserInfo}=UserInfoSlice.actions

// export const { increment, decrement, incrementByAmount } = authModalSlice.actions



export default UserInfoSlice.reducer
