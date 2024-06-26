import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button variant="contained" color="primary" fullWidth onClick={() => loginWithRedirect()}>
            Log In
        </Button>
    );

};

export default LoginButton;

