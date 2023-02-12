import { createSlice } from '@reduxjs/toolkit';
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
hellow:()=>{}

    }
  });

  export const {} =postState.actions

  export const postReducer = postState.reducer