import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Box, Button, Grid, TextField } from '@mui/material';

interface FormValidationProps {
   username: boolean;
   password: boolean;
}

/**
 * Login Form
 * Represents the login/authentication form
 * @returns {React.JSX.Element} - The LoginFormComponent JSX element
 */
const LoginFormComponent = (): React.JSX.Element => {
   const { login } = useAuth();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [validationErrors, setValidationErrors] = useState<FormValidationProps>({
      username: false,
      password: false,
   });

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      let valid = true;

      const newErrors = {
         username: false,
         password: false,
      };

      if (username.trim() === '') {
         newErrors.username = true;
         valid = false;
      }

      if (password.trim() === '') {
         newErrors.password = true;
         valid = false;
      }

      setValidationErrors(newErrors);

      if (valid) {
         await login(username, password);
      }
   };

   const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      setUsername(value);
   };

   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      setPassword(value);
   };

   return (
      <Box
         width='100vw'
         height='100vh'
         display='flex'
         justifyContent='space-around'
      >
         <form onSubmit={handleSubmit} style={{ alignContent: 'center' }}>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <TextField
                     fullWidth
                     label='Username'
                     name='username'
                     value={username}
                     error={validationErrors.username}
                     onChange={handleUsernameChange}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     fullWidth
                     label='Password'
                     name='password'
                     type='password'
                     value={password}
                     error={validationErrors.password}
                     onChange={handlePasswordChange}
                  />
               </Grid>
               <Grid item xs={12} textAlign='center'>
                  <Button type='submit' variant='contained' color='primary'>
                     Login
                  </Button>
               </Grid>
            </Grid>
         </form>
      </Box>
   );
};

export default LoginFormComponent;
