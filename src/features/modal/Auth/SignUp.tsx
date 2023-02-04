import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FirebaseError } from "@firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { addDoc, collection, doc, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import React, { PropsWithChildren, useState } from "react";
import { COLLECTIONS, UserModel } from "../../../constant";
import { LOCAL_STORAGE_KEYS } from "../../../constants";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAppDispatch } from "../../../hooks/hooks";
import { closeModalState, openModalState } from "./authModalSlice";
import { setUserInfo } from "./userInfoSlice";

type SignUpProps = PropsWithChildren;

const SignUp: React.FC<SignUpProps> = () => {
  // const provider = new GoogleAuthProvider();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const setFormValues = () => {
    return (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSignupForm((state) => {
        return { ...state, [e.target.name]: e.target.value };
      });
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (signupForm.password !== signupForm.confirmPassword) {
        setError("Password do not match!!!");
        setIsLoading(false);
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupForm.email,
        signupForm.password
      );
      localStorage.setItem(LOCAL_STORAGE_KEYS.UserCredential,JSON.stringify(userCredential))
      const userDocRef=  doc(firestore,COLLECTIONS.users,userCredential.user.uid) as DocumentReference<UserModel>;
      const userDoc=await getDoc(userDocRef)
      if(!userDoc.exists())
      await setDoc<UserModel>(userDocRef,JSON.parse( JSON.stringify(userCredential.user)))      
      dispatch(setUserInfo(userCredential.user));

      dispatch(closeModalState());
    } catch (error: unknown) {
      if (error instanceof FirebaseError)
        setError(String(error.message.split(":")[1]));
      setIsLoading(false);

      console.error("auth error :", error);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        type={"email"}
        mb={2}
        placeholder="Email"
        value={signupForm.email}
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
        value={signupForm.password}
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
        mb={2}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        required
        name="confirmPassword"
        placeholder="Confirm Password"
        type={"password"}
        fontSize={"10pt"}
        value={signupForm.confirmPassword}
        onChange={setFormValues()}
      />
      {error && (
        <Text color={"red.600"} textAlign={"center"} fontSize={"10pt"}>
          {error}
        </Text>
      )}
      <Button
        width={"100%"}
        mt={2}
        height="36px"
        type="submit"
        isLoading={isLoading}
      >
        Sign Up
      </Button>
      <Flex fontSize={"9pt"} mt={2} justifyContent="center">
        <Text mr={2} cursor="default">Forgot your Password?</Text>
        <Text color={"blue.500"} fontWeight={900} cursor="pointer" onClick={()=>{dispatch(openModalState("resetPassword"))}}>Reset</Text>
      </Flex>
      <Flex fontSize={"9pt"}  justifyContent="center">
        <Text mr={2} cursor="default">
          Already have an account?
        </Text>
        <Text
          color={"blue.500"}
          fontWeight={900}
          cursor="pointer"
          onClick={() => {
            dispatch(openModalState("login"));
          }}
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
