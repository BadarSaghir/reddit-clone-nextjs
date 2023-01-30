import React, { PropsWithChildren, useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import AuthButton from "./AuthButton";
import { AuthModal } from "../../features/modal";
import { signOut, User } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useAppDispatch } from "../../hooks";
import { setUserInfo } from "../../features/modal/Auth/userInfoSlice";
import Icons from "./Icons";
import Menu from "./Menu"
type RightContentProps = {
  user?: User|null;
} & PropsWithChildren;

const RightContent: React.FC<RightContentProps> = ({ user }) => {
 const dispatch= useAppDispatch()
  function logout() {
    signOut(auth)
    dispatch(setUserInfo(null))
    
  }

  return (
    <>
      <AuthModal />
      {/* {auth?auth.currentUser?.email:""} */}
      <Flex  justifyContent={"center"} align={"center"} textAlign={"center"}>
        {user ? <Icons /> : <AuthButton />}
        <Menu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
