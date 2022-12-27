import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';

export const deliveryType = [
  { text: 'Delivery', img: <DeliveryDiningIcon sx={{ color: '#ff9314', fontSize: '28px' }} /> },
  {
    text: 'Pick it myself',
    img: <LocalCafeOutlinedIcon sx={{ color: '#ff9314', fontSize: '28px' }} />,
  },
  {
    text: 'In restorant',
    img: <StorefrontTwoToneIcon sx={{ color: '#ff9314', fontSize: '28px' }} />,
  },
];
