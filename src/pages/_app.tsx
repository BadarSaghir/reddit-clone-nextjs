import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import React, { useEffect, useLayoutEffect, useState } from "react";
import store from "../store";
import { ChakraBaseProvider, Flex, Spinner } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/Layout";
import { LOCAL_STORAGE_KEYS } from "../constants";
import {onAuthStateChanged, UserCredential } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import firebase from 'firebase/app';
import { setUserInfo } from "../features/modal/Auth/userInfoSlice";


export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      store.dispatch(setUserInfo(user));
      console.log("user", user);
      setLoading(false)
    });
  },[])


return (
  
  <Provider store={store}>
     <ChakraBaseProvider theme={theme}>
        {loading?<Flex align={"center"} justifyContent={"center"}  height={"100vh"} >
          <Spinner thickness="4px" color="blue.500" emptyColor="gray.100" size={"xl"}  speed="0.55s"/></Flex>:<Layout>
          <Component {...pageProps} />
        </Layout>}
      </ChakraBaseProvider>
    </Provider>
  );
}
