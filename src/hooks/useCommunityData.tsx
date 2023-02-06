import { collection, CollectionReference, DocumentData, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { COLLECTIONS, CommunityModel, communitySnippetsModel } from '../constant';
import { addSnippet } from '../features/modal/CreateCommunity/createCommunitySlice';
import { firestore } from '../firebase/clientApp';
import { useAppDispatch, useAppSelector } from './hooks';

const useCommunityData= () => {
    
    const communityStateValue = useAppSelector((state)=>state.communities)
    const user = useAppSelector((state)=>state.userInfo.user)
    const dispatch = useAppDispatch()
    const [loading,setLoading] =useState(false)
    const [error,setError] =useState(false)
    const  onJoinOrLeaveCommunity =(communityData:CommunityModel,isJoined:boolean)=>{
        if(isJoined) 
        leaveCommunity(communityData.id) 
        else if(!isJoined)
        joinCommunity(communityData)
    }


   useEffect(()=>{
    if(user?.uid)
    getMySnippets()

   },[user?.uid]) 
    const  joinCommunity =(data:CommunityModel)=>{}
    const  leaveCommunity =(id:string)=>{}
    const  getMySnippets =async()=>{
        setLoading(true)
        try {
            const snippetDoc=await getDocs(collection(firestore,`users/${user.uid}/${COLLECTIONS.communitySnippets}`) as CollectionReference<communitySnippetsModel>) 
            
            const snippets =(await snippetDoc).docs.map(doc=>({...doc.data()}))
            dispatch(addSnippet(snippets))
        } catch (error) {
            
        }
        setLoading(false)
    }
    return {
        communityStateValue,
        onJoinOrLeaveCommunity

    }
}
export default useCommunityData;