import { FieldValue } from "firebase/firestore";

export  enum COLLECTIONS{
    communities="communities"
}

export interface CommunityModel{
    creatorId:string;
    createdAt:FieldValue;
    numberOfMembers:number;
    privacyType:"public"|"private"|"restricted"
}