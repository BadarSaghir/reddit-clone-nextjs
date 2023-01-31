import { Button, Flex, Image, Text } from "@chakra-ui/react";
import {
  SignInMethod,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { PropsWithChildren, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "../../../constants";
import { auth } from "../../../firebase/clientApp";
import { useAppDispatch } from "../../../hooks/hooks";
import { closeModalState } from "./authModalSlice";
import { setUserInfo } from "./userInfoSlice";

type OAuthButtonProps = PropsWithChildren;

const OAuthButton: React.FC<OAuthButtonProps> = () => {
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  provider.addScope("email");
  provider.addScope("profile");
  const dispatch = useAppDispatch()
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
  async function onOAuth(
   
  ) {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, provider);
      localStorage.setItem(LOCAL_STORAGE_KEYS.UserCredential,JSON.stringify(userCredential))
      dispatch(setUserInfo(userCredential.user))

      dispatch(closeModalState())
    } catch (error) { /* empty */ }
    setLoading(false);
  }

  return (
    <Flex
      direction={"column"}
      width="100%"
      mb={4}
      _active={{ color: "gray.900" }}
      color={"gray.500"}
      _hover={{ color: "gray.600" }}
    >
      <Button isLoading={loading} onClick={onOAuth} variant={"oauth"}>
        <Image src="/images/googlelogo.png" height={"20px"} mr={4} />{" "}
        <Text display={{ base: "none", sm: "inherit" }}>
          Continue With Google{" "}
        </Text>{" "}
      </Button>
      {/* <Button mt={2} variant={"oauth"}>Some Other Provider</Button> */}
    </Flex>
  );
};
export default OAuthButton;
