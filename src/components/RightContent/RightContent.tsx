import React, { PropsWithChildren, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import AuthButton from "./AuthButton";
import { AuthModal } from "../../features/modal";
import { User } from "firebase/auth";

type RightContentProps = {
  user: User;
} & PropsWithChildren;

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      {/* {auth?auth.currentUser?.email:""} */}
      <Flex justify={"center"} align={"center"}>
        {user ? "User Logged In" : <AuthButton />}
      </Flex>
    </>
  );
};
export default RightContent;
