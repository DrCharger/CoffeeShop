import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecItem from '../mainPage/recomended/RecItem';
import StyledButton from '../styled/StyledButton';
import Grid from '@mui/material/Grid';
import './favourites.scss';

const Favourites = ({ liked }) => {
  const navigate = useNavigate();

  return (
    <div className="favourites">
      <div className="orders-container">
        <StyledButton navigate={navigate} />
        <h2 className="rewards__header">Favourites</h2>
      </div>
      <Grid container spacing={2}>
        {liked.map(el => (
          <Grid key={el.id} item xs={6}>
            <RecItem el={el} shop={'starbucks'} menuId={el.parentId} url={el.url_name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Favourites;
