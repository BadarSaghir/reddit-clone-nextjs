import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState } from "./community";

export const initialState: PostState = {
    selectedPost: null,
    posts: [],
    postVotes: [],
    postsCache: {},
    postUpdateRequired: true,
  };
  
  export const postState = createSlice({
    name: "postState",
    initialState,
    reducers:{
        setPostItems:(state,action:PayloadAction<{postUpdateRequired:boolean}>)=>{
            state={...state,postUpdateRequired:action.payload.postUpdateRequired}
        }

    }
  });

  export const {setPostItems} =postState.actions

  export const postReducer = postState.reducer