import {  createSlice, PayloadAction } from '@reduxjs/toolkit'
import { browserSessionPersistence, User, UserCredential } from 'firebase/auth';
import { LOCAL_STORAGE_KEYS } from '../../../constants';
import { auth } from '../../../firebase/clientApp';


export interface UserInfoState {
  user:User|null;
}


auth.setPersistence(browserSessionPersistence)

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
