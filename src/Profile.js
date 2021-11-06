import { Box, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { ErrorBox } from "./Error";

export const Profile = () => {
const {user, setUserData, userError, logout, isUserUpdating} = useMoralis()

const [username, setUsername] = useState(user.attributes.username);
const [email, setEmail] = useState(user.attributes.email);
const [password, setPassword] = useState("");

const handleSave = () => {
    setUserData({
        username,
        email,
        password: password == "" ? undefined : password
    })
}

    return (
        <Box>
        {userError && <ErrorBox title="User change failed" message={userError.message} />}
            <Box>
                 <Text>Username</Text>
                <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)}/>
            </Box>
            <Box>
                <Text>Email</Text>
                <Input value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
            </Box>
            <Box>
                <Text>Password</Text>
                <Input value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
            </Box>
            <Button onClick={handleSave} isLoading={isUserUpdating}>Save changes</Button>
            <Button onClick={() => logout()}>Logout</Button>
        </Box>
    );
};