import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface MainContentContainerComponentProps {
   children: ReactNode;
}

/**
 * Main Content Container
 * Represents the container for all visible content
 * @param {ReactNode} children - The underlying children components
 * @returns {React.JSX.Element} - The MainContentContainerComponent JSX element
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
