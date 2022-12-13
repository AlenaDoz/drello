import { Snackbar } from '@mui/material';
import { AlertMUI } from './styles';

interface AlertProps {
  message: string;
  onClose: () => void;
  isOpen: boolean;
  isError: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  onClose,
  isOpen,
  isError,
}) => {
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={onClose}
      autoHideDuration={2000}
    >
      <AlertMUI
        severity={isError ? 'error' : 'success'}
        variant='filled'
        onClose={onClose}
      >
        {message}
      </AlertMUI>
    </Snackbar>
  );
};
