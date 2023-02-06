import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { communitySnippetsModel } from "../../../constant";

export interface CommunityState {
  mySnippets: communitySnippetsModel[];
}

const initialState: CommunityState = {
  mySnippets: [],
};

export const communitySlice = createSlice({
  name: "CommunityState",
  initialState,

  reducers: {
    addSnippet(state,action:PayloadAction<communitySnippetsModel[]>) {
      // console.log(state)
      state.mySnippets=action.payload
    },
    leaveCommunity(
      state,
      action: PayloadAction<"login" | "signup" | "resetPassword">
    ) {
        
    },
  },
});
export const { addSnippet, leaveCommunity } = communitySlice.actions;

export default communitySlice.reducer;
