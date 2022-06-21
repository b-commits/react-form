import { Alert, Snackbar } from '@mui/material';
import { SubmitMessageProps } from './FieldInputProps';

const SubmitMessage = ({
  successful,
  handleSnackbarClosure,
}: SubmitMessageProps) => {
  return (
    <Snackbar
      open={successful}
      autoHideDuration={4500}
      onClose={handleSnackbarClosure}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        The dish has been successfully submitted!
      </Alert>
    </Snackbar>
  );
};

export default SubmitMessage;
