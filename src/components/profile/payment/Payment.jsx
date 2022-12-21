import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import { setPayment } from '../../../usersStore/users.actions';

const Payment = ({ setPayment, method }) => {
  console.log(method);
  const [value, setValue] = React.useState(method);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleOK = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setPayment(value);
    }
  };

  console.log(value);
  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ color: '#000' }}>
        {value}
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: '#000' }}>Change the payment method</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Payment</InputLabel>
              <Select
                native
                value={value}
                onChange={event => setValue(event.target.value)}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option value={'Cash'}>Cash</option>
                <option value={'Card'}>Card</option>
                <option value={'Bonus'}>Bonus</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#000' }}>
            Cancel
          </Button>
          <Button onClick={handleOK} sx={{ color: '#000' }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapState = state => {
  return {
    method: state.usersList.payment,
  };
};

const mapDispatch = {
  setPayment: setPayment,
};

export default connect(mapState, mapDispatch)(Payment);
