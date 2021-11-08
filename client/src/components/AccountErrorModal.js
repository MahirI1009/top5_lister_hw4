import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { GlobalStoreContext } from '../store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { store } = useContext(GlobalStoreContext);
  let isOpen = false;
  let errorMessage = "";
  if (store.errMessage !== "") {
    errorMessage = store.errMessage;
    isOpen = true;
  } 
  const handleClose = () => {
    store.setError("");
    isOpen = false;
  }

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="account-modal-title"
        aria-describedby="account-modal-description"
      >
        <Box sx={style}>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            {errorMessage}
          </Alert>
          <Button variant="outlined" onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}