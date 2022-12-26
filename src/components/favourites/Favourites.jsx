import React from 'react';
import Grid from '@mui/material/Grid';
import RecItem from '../mainPage/recomended/RecItem';

const Favourites = ({ liked }) => {
  console.log(liked);
  return (
    <div>
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
