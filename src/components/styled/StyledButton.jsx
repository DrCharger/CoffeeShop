import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const StyledButton = ({ navigate }) => {
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIosNewTwoToneIcon />}
      sx={{
        color: '#543820',
        borderRadius: '50%',
        minWidth: 35,
        height: 35,
        padding: 0,
        marginLeft: '5%',
        opacity: 0.7,
        paddingLeft: '9px',
      }}
      onClick={() => navigate(-1)}
    />
  );
};

export default StyledButton;
