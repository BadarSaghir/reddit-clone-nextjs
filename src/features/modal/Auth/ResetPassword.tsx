import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {sendPasswordResetEmail} from "@firebase/auth";


import { auth } from "../../../firebase/clientApp";
import { BsDot, BsReddit } from "react-icons/bs";
import { useAppDispatch } from "../../../hooks/hooks";
import { openModalState } from "./authModalSlice";
import { FirebaseError } from "firebase/app";



const ResetPassword: React.FC = () => {
  
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending]=useState(false)
  const [error, setError]=useState({message:""})

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true)
    try {
        await   sendPasswordResetEmail(auth,email)
        ;
        setSuccess(true);
    } catch (error) {
        if(error instanceof FirebaseError)
        setError({message:error.message.split(":")[1]})
        
    }
    setSending(false)

   
  };

  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Icon as={BsReddit} color="brand.100" fontSize={40} mb={2} />
      <Text fontWeight={700} mb={2}>
        Reset your password
      </Text>
      {success ? (
        <Text mb={4}>Check your email :)</Text>
      ) : (
        <>
          <Text fontSize="sm" textAlign="center" mb={2}>
            Enter the email associated with your account and we will send you a
            reset link
          </Text>
          <form onSubmit={onSubmit} style={{ width: "100%" }}>
            <Input
              required
              name="email"
              placeholder="Email..."
              type="email"
              mb={2}
              onChange={(event) => setEmail(event.target.value)}
              fontSize="10pt"
              _placeholder={{ color: "gray.500" }}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              bg="gray.50"
            />
            <Text textAlign="center" fontSize="10pt" color="red">
              {error?.message}
            </Text>
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Flex
        alignItems="center"
        fontSize="9pt"
        color="blue.500"
        fontWeight={700}
        cursor="pointer"
      >
        <Text onClick={() =>{dispatch(openModalState("login"))}}

        >
          LOGIN
        </Text>
        <Icon as={BsDot} />
        <Text
          onClick={() =>{dispatch(openModalState("signup"))}
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;