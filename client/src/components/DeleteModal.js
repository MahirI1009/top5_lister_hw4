import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
        isOpen = true;
  }
  const handleClose = () => {
      store.unmarkListForDeletion();
  }

  const handleDelete = () => {
      store.deleteMarkedList();
  }

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure, you want to delete {name}?
          </Typography>
            <Button variant="contained" color="success" onClick={handleDelete}> Confirm </Button>
            <Button variant="outlined" color="error" onClick={handleClose}> Cancel </Button>
        </Box>
      </Modal>
    </div>
  );
}