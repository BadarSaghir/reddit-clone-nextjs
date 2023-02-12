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
  const { community } = router.query as {community:string};
 const comState= communityStateValue.mySnippets.find(value=>community===value.communityId)
  return (
  <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
            <Text>Create a post</Text>
        </Box>
        <NewPostForm user={user} communityId={comState.communityId} communityImageURL={comState.imageUrl}/>
      </>
      <>e</>
    </PageContent>
  );
};
export default SubmitPostPage;
