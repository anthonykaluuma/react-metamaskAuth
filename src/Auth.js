import { MoralisProvider } from "react-moralis";
import { useState } from "react";
import { Button, Text, Stack, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";



const Signup = () => {
  const {signup} = useMoralis ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return <Stack spacing={6}>
    <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
    <Button onClick={() => signup(email, password, email)}>Signup</Button>
  </Stack>
}


const Login = () => {
  const {login} = useMoralis ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return <Stack spacing={6}>
    <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
    <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
    <Button onClick={() => login(email, password)}>Login</Button>
  </Stack>
}




export const Auth = () => {
    const { authenticate, isAuthenticating, authError, logout } = useMoralis();
    
    return (
    <Stack spacing={3}>
    {authError && <ErrorBox title="Authentication has failed" message={authError.message} /> }

    <Button btn isLoading={isAuthenticating} onClick={() => authenticate()}>
        Authenticate via Metamask
    </Button> 
     <Text textAlign="center">
        <em>or</em>
    </Text>
    <Signup />
    <Text textAlign="center">
    <em>or</em>
    </Text>
    <Login />
    </Stack>
    )}