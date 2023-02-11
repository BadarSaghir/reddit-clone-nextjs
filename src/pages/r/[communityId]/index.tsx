// eslint-disable react/prop-types
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import CreatePostLink from '../../../components/Community/CreatePostLink';
import Header from '../../../components/Community/Header';
import NotFound from '../../../components/Community/NotFound';
import PageContent from '../../../components/Layout/PageContent';
import { COLLECTIONS, CommunityModel } from '../../../constant';
import { firestore } from '../../../firebase/clientApp';

type RCommunityProps = {
    communityData?:CommunityModel & {id:string}
};

const RCommunity :NextPage<RCommunityProps> = ({communityData }) => {
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        
      return <div>Loading...</div>
    }
    
    
    if(!communityData){
        return <NotFound/>
    }
    return <><Header communityData={communityData}/>
    <PageContent>
        <>
        <CreatePostLink/>
        
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
        fallback: true //indicates the type of fallback
    }
}

export default RCommunity;