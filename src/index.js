import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// const div = React.createElement(
//   'div',
//   {
//     name: 'main',
//     id: 'test-id',
//     className: 'test-class',
//     children: ['hello', ' ','from', ' UA']
//   },
  
// )

// console.log('div', div);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


