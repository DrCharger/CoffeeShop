import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const DetailCoffee = () => {
  let navigate = useNavigate();
  return (
    <div className="details-main">
      <div className="details-main__img">
        <img src={''} alt="logo" className="details-main__img-url" />
        <div>
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
            }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="details-main-info"></div>
      </div>
    </div>
  );
};

export default DetailCoffee;
