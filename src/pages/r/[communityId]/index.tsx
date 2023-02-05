/* eslint-disable react/prop-types */
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import { COLLECTIONS, CommunityModel } from '../../../constant';
import { firestore } from '../../../firebase/clientApp';

type RCommunityProps = {
    communityData?:CommunityModel & {id:string}|null
};

// eslint-disable-next-line react/prop-types
const RCommunity :NextPage<RCommunityProps> = ({communityData }) => {
    
    return <div>{communityData.numberOfMembers}</div>
}

export const  getServerSideProps:GetServerSideProps = async (context)=>{
    try {
        const communityDocRef =doc(firestore,COLLECTIONS.communities,context.query.communityId as string)
       const communityDoc= await getDoc(communityDocRef)
      const communityData= communityDoc.data()
      const data = communityData ? communityData as CommunityModel : null;

       return {
        props:{
            communityData:JSON.parse(safeJsonStringify({...data})) 
        }
       }
    } catch (error) {
        return {
            props:{communityData:null}
        }
    }

}
export default RCommunity;