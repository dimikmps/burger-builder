import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface MainContentContainerComponentProps {
   children: ReactNode;
}

/**
 * Main Content Container
 * Returns content based on the url/routing
 * @param {React.JSX.Element} routeComponent - The component/view to be returned.
 * @returns {JSX.Element} - The MainContentContainerComponent JSX element, wrapping component provided by the router.
 */
const MainContentContainerComponent = ({ children }: MainContentContainerComponentProps): React.JSX.Element => {
   return (
      <Box
         component='main'
         display='flex'
         flexDirection='column'
         justifyContent='space-between'
         height='100%'
         width='100%'
         overflow='auto'
      >
         {children}
      </Box>
   );
};

export default MainContentContainerComponent;
