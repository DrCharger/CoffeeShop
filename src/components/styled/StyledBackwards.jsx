import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const StyledBackwards = ({ navigate }) => {
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIosNewTwoToneIcon />}
      sx={{
        color: '#fff',
        backgroundColor: '#543820',
        marginTop: '-35%',
        paddingLeft: '9px',
      }}
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};

export default StyledBackwards;
