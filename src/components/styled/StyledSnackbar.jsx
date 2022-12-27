import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledSnackbar = ({ open, setOpen, counter }) => {
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={() => setOpen(false)}>
      <Alert severity="success" sx={{ width: '100%' }}>
        {counter} items added to the shopping cart!
      </Alert>
    </Snackbar>
  );
};

export default StyledSnackbar;
