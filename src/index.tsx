import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App'
import App from './App';
import Example from './Example';
import ExampleTwo from './ExampleTwo';
import Example2 from './Example2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Example />
    <ExampleTwo />
    <Example2 />
  </React.StrictMode>
);
