import {  createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface AuthModalState {
  open: boolean,
  view: 'login' | 'signup' | 'resetPassword'
}


const initialState: AuthModalState = {
  open: false,
  view: 'login',
}



export const authModalSlice = createSlice({
  name: ' AuthModalState',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    closeModalState(state){
        // console.log(state)
        
        state.open=false
    },
    openModalState(state,action:PayloadAction< 'login' | 'signup' | 'resetPassword'>){
        state.view=action.payload
        state.open=true     
    }
   
  },
 

})
export const {closeModalState,openModalState}=authModalSlice.actions

// export const { increment, decrement, incrementByAmount } = authModalSlice.actions



export default authModalSlice.reducer
