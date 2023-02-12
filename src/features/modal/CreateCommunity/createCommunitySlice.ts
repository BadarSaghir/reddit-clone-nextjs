import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommunityModel, communitySnippetsModel } from "../../../constant";
import { FieldValue, serverTimestamp, Timestamp } from "firebase/firestore";

export const defaultCommunity: CommunityModel = {
  id: "",
  creatorId: "",
  numberOfMembers: 0,
  privacyType: "public",
  createdAt: serverTimestamp() as Timestamp 
};


export interface CommunityState {
  mySnippets: communitySnippetsModel[];
  initSnippetsFetched: boolean;
  visitedCommunities: {
    [key: string]: CommunityModel;
  };
  currentCommunity: CommunityModel;
}

const initialState: CommunityState = {
  mySnippets: [],
  initSnippetsFetched: false,
  visitedCommunities: {},
  currentCommunity: defaultCommunity
};

export const communitySlice = createSlice({
  name: "CommunityState",
  initialState,

  reducers: {
    setSnippet(state,action:PayloadAction<communitySnippetsModel[]>) {
      // console.log(state)
      state.mySnippets=action.payload
    },
    setCurrentCommunity(state,action:PayloadAction<CommunityModel>) {
      // console.log(state)
      state.currentCommunity=action.payload
      state.visitedCommunities[action.payload.id || ""]=action.payload
    },
    resetSnippet(state) {
        // console.log(state)
        state.mySnippets=[]
      },
    
    leaveCommunity(
      state,
      action: PayloadAction<"login" | "signup" | "resetPassword">
    ) {
        
    },
  },
});
export const { resetSnippet,setSnippet, leaveCommunity, setCurrentCommunity } = communitySlice.actions;

export default communitySlice.reducer;
