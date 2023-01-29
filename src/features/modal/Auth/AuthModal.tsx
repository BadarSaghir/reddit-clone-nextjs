import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import AuthInputs from "./AuthInputs";
import { closeModalState, openModalState } from "./authModalSlice";
import OAuthButton from "./OAuthButton";
import ResetPassword from "./ResetPassword";

type AuthModelProps =  PropsWithChildren;

const AuthModal: React.FC<AuthModelProps> = () => {
  const dispatch = useAppDispatch();
  const { open, view } = useAppSelector((state) => state.authModal);

  // console.log("open", open);
  const onClose = () => {
    return () => {
      // console.log("onclose", open);

      dispatch(closeModalState());
    };
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} alignItems="center" justifyContent={"center"}>
            {view === "login" && "Log In"}
            {view === "signup" && "Sign Up"}
            {view === "resetPassword" && "Reset Password"}
            
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={6} display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center">

            <Flex direction={"column"} justifyContent={"center"} align="center" width={"70%"} 
            >
              {(view=="login"||view=="signup")?(<>
            <OAuthButton />
              <Text color={"gray.500"} fontWeight={
                "700"
              } >OR</Text>
              <AuthInputs />   </>):
              <ResetPassword />}
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
