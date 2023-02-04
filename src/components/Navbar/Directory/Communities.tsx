import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { CreateCommunityModal } from "../../../features/modal";

type CommunitiesProps = PropsWithChildren;

const Communities: React.FC<CommunitiesProps> = () => {
  const [open,setOpen] = useState(false)
  return <><CreateCommunityModal open={open} handleOnClose={()=>{setOpen(false)}}/>
  <MenuItem width={"100%"} onClick={()=>{setOpen(true)}} fontSize="10pt" _hover={{bg:"gray.100"}} bg={"white"} cursor="pointer" >
  <Flex align="center" justifyContent={"center"}>
    <Icon fontSize={18} mr={3}  as={GrAdd}/>
    Create Community
  </Flex>
  </MenuItem>
  </>;
};
export default Communities;
