import { Box, Button, Modal, Typography } from '@mui/material';

interface ErrorModalComponentProps {
   isOpen: boolean;
   error: Error;
   setClosed: () => void;
}

/**
 * Error Modal
 * Represents the error modal to be displayed upon any authentication error on the login page
 * @param {boolean} isOpen - The open/closed state of the modal
 * @param {Error} error - The error that caused to modal to be triggered
 * @param {() => void} setClosed - Set the modal state to closed in the parent component's state
 * @returns {React.JSX.Element} - The ErrorModalComponent JSX element
 */
const ErrorModalComponent = ({ isOpen, error, setClosed }: ErrorModalComponentProps): React.JSX.Element => {
   return (
      <Modal open={isOpen} onClose={setClosed}>
         <Box
            component='div'
            position='absolute'
            top='50%'
            left='50%'
            width='50vw'
            maxWidth={400}
            bgcolor='background.paper'
            boxShadow={24}
            textAlign='center'
            borderRadius={5}
            p={4}
            sx={{ transform: 'translate(-50%, -50%)' }}
         >
            <Typography variant='h6' component='h2' align='center'>
               Oops!
            </Typography>
            <Typography my={3}> {error?.message}</Typography>
            <Button onClick={setClosed}>Close</Button>
         </Box>
      </Modal>
   );
};

export default ErrorModalComponent;
