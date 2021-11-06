import { Container, Heading, Flex, Spacer, Avatar } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react"
import { useState } from "react";
import {Auth} from "./Auth"
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";


function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();

  return (
  <Container>
  <Flex my={6}>
    <Link to="/">
    <Heading mb={6}>Home</Heading>
    </Link>
    <Spacer />
    {isAuthenticated && <Link to="/profile">
    <Avatar name={user.attributes.username}/>
    </Link>}
  </Flex>
      <Heading>Welcome, {user ? user.attributes.username: " authenticate please ..."}</Heading>
    {isAuthenticated ? (
    <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
    
          
    </Switch>
    ) : ( 
      <>
       {!isAuthUndefined && <Redirect to="/" />}
      <Auth />
      </>
    )}
</Container>
    );
    }

export default App;
