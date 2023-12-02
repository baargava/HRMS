import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!email || !passw) {
      setError('Please fill in all fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (validateForm()) {
      // Add your login logic here
      navigate('/dashboard');
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
    <Typography variant='h3'>HRMS</Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          padding: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <Typography variant="h5">Login</Typography>
        {error && (
          <Typography
            color="error"
            variant="body2"
            style={{ marginBottom: '8px' }}
          >
            {error}
          </Typography>
        )}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          style={{ marginBottom: '16px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          style={{ marginBottom: '16px' }}
          value={passw}
          onChange={(e) => setPassw(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
