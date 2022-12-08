import React from 'react';
import Modal from '@mui/material/Modal';

const CustomModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>Hello</div>
    </Modal>
  );
};

export default CustomModal;
