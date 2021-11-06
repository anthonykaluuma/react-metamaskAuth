
import { MoralisProvider } from "react-moralis";
import { useState } from "react";
import { Button, Text, Stack, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";


export const ErrorBox = ({title, message}) => {
      return (
      
      <Alert status="error">
  <AlertIcon />
  <Box flex="1">
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription display="block">{message}
    </AlertDescription>
  </Box>
  <CloseButton position="absolute" right="8px" top="8px" />
</Alert> 
)}