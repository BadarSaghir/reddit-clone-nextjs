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
  useDisclosure,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import AuthInputs from "./AuthInputs";
import { closeModalState, openModalState } from "./authModalSlice";

type AuthModelProps = {} & PropsWithChildren;

const AuthModal: React.FC<AuthModelProps> = () => {
  const dispatch = useAppDispatch();
  const { open, view } = useAppSelector((state) => state.authModal);

  console.log("open", open);
  const onClose = () => {
    return () => {
      console.log("onclose", open);

      dispatch(closeModalState());
    };
  };

  return (
    <>
      <Modal isOpen={open} onClose={onClose()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {view === "login" && "Log In"}
            {view === "signup" && "Sign Up"}
            {view === "resetPassword" && "Reset Password"}
            
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center">

            <Flex justifyContent={"center"} align="center" width={"70%"} border="1px solid red">
              {/* <OAuthButton /> */}
              <AuthInputs />
              {/* <ResetPassword /> */}

            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose()}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
