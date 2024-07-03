import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useMediaQuery, useTheme } from '@mui/material';

/**
 * Header
 * Represents the app-wide header
 * @returns {React.JSX.Element} - The HeaderComponent JSX element
 */
const HeaderComponent = (): React.JSX.Element => {
   const { logout } = useAuth();
   const theme = useTheme();
   const isOnSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <Box flexGrow={1}>
         <AppBar position='static'>
            <Toolbar variant='dense'>
               <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  {!isOnSmallScreen ? 'BurgerBuilder' : 'BB'}
               </Typography>
               <Button color='inherit' onClick={logout}>
                  Logout
               </Button>
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default HeaderComponent;
