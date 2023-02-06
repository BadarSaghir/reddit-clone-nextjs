/* eslint-disable react/prop-types */
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import safeJsonStringify from 'safe-json-stringify';
import Header from '../../../components/Community/Header';
import NotFound from '../../../components/Community/NotFound';
import PageContent from '../../../components/Layout/PageContent';
import { COLLECTIONS, CommunityModel } from '../../../constant';
import { firestore } from '../../../firebase/clientApp';

type RCommunityProps = {
    communityData?:CommunityModel & {id:string}
};

// eslint-disable-next-line react/prop-types
const RCommunity :NextPage<RCommunityProps> = ({communityData }) => {

//    console.log("Community Data",communityData)
    if(!communityData){
        return <NotFound/>
    }
    return <><Header communityData={communityData}/>
    <PageContent>
        <p>hel</p>
        <p>hel</p>
    </PageContent>
    </>
}

export const  getServerSideProps:GetServerSideProps = async (context)=>{

    try {
        const communityDocRef =doc(firestore,COLLECTIONS.communities,context.query.communityId as string)
       const communityDoc= await getDoc(communityDocRef)
      const communityData= communityDoc.data()
      const data = communityData as CommunityModel;

       return {
        props:{
            communityData:communityDoc.exists() ?JSON.parse(safeJsonStringify({...data})):"" 
        }
       }
    } catch (error) {
        return {
            props:{communityData:""}
        }
    }

}
export default RCommunity;