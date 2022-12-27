import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { skills } from '../../../data/skills';

const About = ({ navigate }) => {
  return (
    <div>
      <div>
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
      </div>
      <strong>Coffee Shop Project on React-Redux</strong>
      <p>
        Current Website:{' '}
        <a
          href="https://gilded-kringle-ac60d9.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          gilded-kringle-ac60d9.netlify.app
        </a>
      </p>
      <strong>The tech stack is:</strong>
      <ul>
        {skills.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <strong>Author Nasadiuk Dmytro</strong>
    </div>
  );
};

export default About;
