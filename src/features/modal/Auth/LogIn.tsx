import { Button, Flex, Input,Text } from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { PropsWithChildren, useState } from "react";
import { auth } from "../../../firebase/clientApp";
import { useAppDispatch } from "../../../hooks";
import {closeModalState, openModalState} from "./authModalSlice";
import { setUserInfo } from "./userInfoSlice";

type LogInProps =  PropsWithChildren;

const LogIn: React.FC<LogInProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isLoading,setIsLoading]= useState(false);
  const [error,setError]= useState("")
const dispatch = useAppDispatch()
  const setFormValues = () => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      setLoginForm((state) => {
        return { ...state, [e.target.name]: e.target.value };
      });
    };
  };

  const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
setIsLoading(true)
setError("")
try {
 const user=await signInWithEmailAndPassword(auth,loginForm.email,loginForm.password)
dispatch(setUserInfo(user.user))
 dispatch(closeModalState())
} catch (error) {
  if(error instanceof FirebaseError)setError(error.message.split(":")[1])
}
setIsLoading(false)

  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        type={"email"}
        placeholder="Email"
        value={loginForm.email}
        onChange={setFormValues()}
        mb={2}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg={"gray.50"}
      />
      <Input
        bg={"gray.50"}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        required
        name="password"
        placeholder="Password"
        type={"password"}
        mb={2}
        fontSize={"10pt"}
        value={loginForm.password}
        onChange={setFormValues()}
      />
      <Text color={"red.600"} textAlign={"center"} fontSize={"10pt"}>{error && error}</Text>
      <Button isLoading={isLoading} width={"100%"} height="36px" mt={2} mb={2} type="submit">
        Login
      </Button>
      <Flex fontSize={"9pt"} justifyContent="center">
        <Text mr={2} cursor="default">New Here </Text>
        <Text color={"blue.500"} fontWeight={900} cursor="pointer" onClick={()=>{dispatch(openModalState("signup"))}}>Sign Up</Text>
      
      </Flex>
    </form>
  );
};
export default LogIn;
