import { Button, Flex, Input,Text } from '@chakra-ui/react';
import React, { PropsWithChildren, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { openModalState } from './authModalSlice';

type SignUpProps = {
    
}&PropsWithChildren;

const SignUp:React.FC<SignUpProps> = () => {
    const [SignupForm, setSignupForm] = useState({ email: "", password: "",confirmPassword:"" });
  const dispatch = useAppDispatch()
    const setFormValues = () => {
      return (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupForm((state) => {
          return { ...state, [e.target.name]: e.target.value };
        });
      };
    };
  
    const onSubmit = () => {};
  
    return (
      <form onSubmit={onSubmit}>
        <Input
          required
          name="email"
          type={"email"}
          mb={2}
          placeholder="Email"
          value={SignupForm.email}
          onChange={setFormValues()}
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
          value={SignupForm.password}
          onChange={setFormValues()}
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
          name="confirmPassword"
          placeholder="Confirm Password"
          type={"password"}
          mb={4}
          fontSize={"10pt"}
          value={SignupForm.password}
          onChange={setFormValues()}
        />
        <Button width={"100%"} height="36px" mb={2} type="submit">
          Sign Up
        </Button>
        <Flex fontSize={"9pt"} justifyContent="center">
          <Text mr={2} cursor="default">Already have an account?</Text>
          <Text color={"blue.500"} fontWeight={900} cursor="pointer" onClick={()=>{dispatch(openModalState("login"))}}>Log In</Text>
        
        </Flex>
      </form>
    );
  };
export default SignUp;