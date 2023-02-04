import { User } from "firebase/auth";
import { FieldValue } from "firebase/firestore";

export  enum COLLECTIONS{
    communities="communities",
    users="users",
}

export interface CommunityModel{
    creatorId:string;
    createdAt:FieldValue;
    numberOfMembers:number;
    privacyType:"public"|"private"|"restricted"
}

export type UserModel = User