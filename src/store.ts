import  communityReducer  from './features/modal/CreateCommunity/createCommunitySlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userInfoReducer from './features/modal/Auth/userInfoSlice'

import counterReducer from './features/counter/counterSlice'
import authModalReducer from "./features/modal"

export function makeStore() {
  return configureStore({
    middleware(getDefaultMiddleware) {
       return getDefaultMiddleware({serializableCheck:false})
    },
    reducer: { counter: counterReducer,authModal:authModalReducer,userInfo:userInfoReducer,communities:communityReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
