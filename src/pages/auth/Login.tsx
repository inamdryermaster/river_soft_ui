import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import LoginButton from '../../components/LoginButton';
import PageLoading from '../../components/PageLoading';

const LoginHome: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid item xs={12} md={6}>
          <Card elevation={6}>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Welcome Aboard!
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Journey into the digital realm of Rivers Soft. Your portal
                awaits, ready to unlock a world of possibilities.
              </Typography>
              <Box mt={2} display="flex" justifyContent="center">
                <LoginButton />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginHome;
