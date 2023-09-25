import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App'
import App from './App';
import Example from './Example';
import ExampleTwo from './ExampleTwo';
import Loader from './Loader';
import Circle from './Circle';
import LoadingWavy from './LoadingWavy'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Example />
    <ExampleTwo />
    <Loader />
    <Circle />
    <LoadingWavy />
  </React.StrictMode>
);
