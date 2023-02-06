// eslint-disable react/prop-types
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
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

const RCommunity :NextPage<RCommunityProps> = ({communityData }) => {

//    console.log("Community Data",communityData)
    if(!communityData){
        return <NotFound/>
    }
    return <><Header communityData={communityData}/>
    <PageContent>
        <>
        <Link href={"/r/riverpod"}>river</Link>
        
        </>
        <>

        <Link href={"/r/leg"}>leg</Link>
        
    </>
    </PageContent>
    </>
}

// export const  getServerSideProps:GetServerSideProps = async (context)=>{

//     try {
//         const communityDocRef =doc(firestore,COLLECTIONS.communities,context.query.communityId as string)
//        const communityDoc= await getDoc(communityDocRef)
//       const communityData= communityDoc.data()
//       const data = communityData as CommunityModel;

//        return {
//         props:{
//             communityData:communityDoc.exists() ?JSON.parse(safeJsonStringify({...data})):"" 
//         }
//        }
//     } catch (error) {
//         return {
//             props:{communityData:""}
//         }
//     }

// }

export const  getStaticProps:GetStaticProps = async (context)=>{

    try {
        const communityDocRef =doc(firestore,COLLECTIONS.communities,context.params.communityId as string)
       const communityDoc= await getDoc(communityDocRef)
      const communityData= communityDoc.data()
      const data = communityData as CommunityModel;

       return {
        props:{
            communityData:communityDoc.exists() ?JSON.parse(safeJsonStringify({...data})):"" 
        },
        revalidate:60
       }
    } catch (error) {
        return {
            props:{communityData:""},
            revalidate:60

        }
    }

}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default RCommunity;