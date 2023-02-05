import { User } from "firebase/auth";
import {  Timestamp } from "firebase/firestore";

export  enum COLLECTIONS{
    communities="communities",
    users="users",
    
    communitySnippets="communitySnippets"
}

export interface CommunityModel{
    id:string;
    creatorId:string;
    createdAt:Timestamp;
    numberOfMembers:number;
    privacyType:"public"|"private"|"restricted";
    imageUrl?:string;
}
export interface communitySnippetsModel{
communityId:string;
isModerator:boolean;
}
export type UserModel = User