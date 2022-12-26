import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e5e5e5',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const Forgot = ({ open, setClose, users }) => {
  const [value, setValue] = useState('');

  const password =
    users.find(user => user.email === value) === undefined
      ? null
      : users.find(user => user.email === value).password;
  console.log(Boolean(password));
  return (
    <Modal
      open={open}
      onClose={() => setClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          What is your Email?
        </Typography>
        <input
          type="text"
          className="login-main-input"
          placeholder="example@gmail.com"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {Boolean(password) && (
          <p>
            Your password is: <strong className="pass">{password}</strong>
          </p>
        )}
      </Box>
    </Modal>
  );
};

export default Forgot;
