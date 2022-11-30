import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.createRoot(rootElem).render(<App />);
