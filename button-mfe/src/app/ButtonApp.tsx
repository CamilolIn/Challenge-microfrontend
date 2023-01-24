import React from 'react';
import { useCount } from './context/store';
import './ButtonApp.scss';

function ButtonApp() {
  const counterStore = useCount();
  
  const onCount = () => {
    counterStore?.countOne();
  };

  const onClear = () => {
    counterStore?.clear();
  };

  return (
    <div className="button-app">
      <button onClick={onClear} className="button button--clear">Clear</button>
      <button onClick={onCount} className="button button--count">Click me!</button>
    </div>
  );
}

export default ButtonApp;
