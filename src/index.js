import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp defaultCategories={['Boobs', 'Tits']}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <GifExpertApp />,
//   document.getElementById('root')
// );

