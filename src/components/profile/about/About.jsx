import React from 'react';
import { skills } from '../../../data/skills';
import StyledBackwards from '../../styled/StyledBackwards';

const About = ({ navigate }) => {
  return (
    <div>
      <StyledBackwards navigate={navigate} />
      <div>
        <strong>Coffee Shop Project on React-Redux</strong>
      </div>
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
