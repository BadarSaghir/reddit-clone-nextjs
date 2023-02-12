import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import PageContent from "../../../components/Layout/PageContent";
import NewPostForm from "../../../components/Post/NewPostForm/NewPostForm";
import { useAppSelector } from "../../../hooks/hooks";
import useCommunityData from "../../../hooks/useCommunityData";

const SubmitPostPage: React.FC = () => {
  const user = useAppSelector(state=>state.userInfo.user)
 const {communityStateValue,error,loading}= useCommunityData()
  const router = useRouter();
  const { communityId } = router.query as {communityId:string};
 const comState= communityStateValue.currentCommunity
  return (
  <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
            <Text>Create a post</Text>
        </Box>
        <NewPostForm user={user} communityId={communityId} communityImageURL={comState.imageUrl}/>
      </>
      <>e</>
    </PageContent>
  );
};
export default SubmitPostPage;
