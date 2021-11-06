import { Box, Container, Button } from "@chakra-ui/react";
import {useMoralis} from "react-moralis";
import { useState } from "react";



export const Home = () => {
  const {user, setUserData, userError, logout, isUserUpdating} = useMoralis()
 
 return (
<Button onClick={() => logout()}>Logout</Button>

  );
};