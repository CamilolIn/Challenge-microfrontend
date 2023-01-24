import React from 'react';
import { useCount } from 'buttonMfe/store';
import './App.scss';

function App() {
  const counterStore = useCount();

  return (
    <div className="result-app">
      <span data-testid="result-test">{counterStore?.count}</span>
    </div>
  );
}

export default App;
