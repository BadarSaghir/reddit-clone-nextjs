import { collection, CollectionReference, doc, DocumentData, DocumentReference, getDocs, increment, writeBatch } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { COLLECTIONS, CommunityModel, communitySnippetsModel } from '../constant';
import { openModalState } from '../features/modal/Auth/authModalSlice';
import { setSnippet } from '../features/modal/CreateCommunity/createCommunitySlice';
import { firestore } from '../firebase/clientApp';
import { useAppDispatch, useAppSelector } from './hooks';

const useCommunityData= () => {
    
    const communityStateValue = useAppSelector((state)=>state.communities)
    const user = useAppSelector((state)=>state.userInfo.user)
    const dispatch = useAppDispatch()
    const [loading,setLoading] =useState(false)
    const [error,setError] =useState(false)
    const  onJoinOrLeaveCommunity =(communityData:CommunityModel,isJoined:boolean)=>{
        setLoading(true)
        try {
            if(!user){
                setLoading(false)
                dispatch(openModalState("login"))

                throw new Error("User Is not login!")
             
            }
            if(isJoined) 
            leaveCommunity(communityData.id) 
            else if(!isJoined)
            joinCommunity(communityData)
        } catch (error) {
            setError(error)
        }
     
        setLoading(false)

    }


   useEffect(()=>{
    if(user?.uid){
    getMySnippets()
    }else{
        dispatch(setSnippet([]))
    }

   },[user?.uid]) 
    const  joinCommunity =async(data:CommunityModel)=>{
        setLoading(true)
        try {
            const batch=writeBatch(firestore)

            const newCommunitySnippet:communitySnippetsModel={
                communityId:data.id,
                imageUrl:data.imageUrl||"",
               
            }
            batch.set(doc(firestore,`users/${user.uid}/${COLLECTIONS.communitySnippets}`,data.id),newCommunitySnippet)
            batch.update<CommunityModel>(doc(firestore,`${COLLECTIONS.communities}` ,data.id) as DocumentReference<CommunityModel>,{
numberOfMembers:increment(1)
            })
          await  batch.commit()
          dispatch(setSnippet([...communityStateValue.mySnippets,newCommunitySnippet]))

        } catch (error) {
            setError(error)
        }
        setLoading(false)

    }
    const  leaveCommunity =async (id:string)=>{
        setLoading(true)
        try {
            const batch=writeBatch(firestore)

         
            batch.delete(doc(firestore,`users/${user.uid}/${COLLECTIONS.communitySnippets}`,id))
            batch.update<CommunityModel>(doc(firestore,`${COLLECTIONS.communities}` ,id) as DocumentReference<CommunityModel>,{
numberOfMembers:increment(-1)
            })
          await  batch.commit()
          dispatch(setSnippet([...communityStateValue.mySnippets.filter((val)=>val.communityId!==id)]))

        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    const  getMySnippets =async()=>{
        setLoading(true)
        try {
            const snippetDoc=await getDocs(collection(firestore,`users/${user.uid}/${COLLECTIONS.communitySnippets}`) as CollectionReference<communitySnippetsModel>) 
            
            const snippets =(await snippetDoc).docs.map(doc=>({...doc.data()}))
            dispatch(setSnippet(snippets))
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    return {
        communityStateValue,
        onJoinOrLeaveCommunity,
        loading,
        error

    }
}
export default useCommunityData;