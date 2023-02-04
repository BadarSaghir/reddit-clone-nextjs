import { User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";

export  enum COLLECTIONS{
    communities="communities",
    users="users",
    
    communitySnippets="communitySnippets"
}

export interface CommunityModel{
    creatorId:string;
    createdAt:FieldValue;
    numberOfMembers:number;
    privacyType:"public"|"private"|"restricted"
}
export interface communitySnippetsModel{
communityId:string;
isModerator:boolean;
}
export type UserModel = User