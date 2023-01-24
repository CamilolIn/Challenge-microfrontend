import React from 'react';
import ButtonApp from 'buttonMfe/App';
import ResultApp from 'resultMfe/App';
import './App.scss';

function App() {
  return (
    <div className="host-app">
      <div className='host-app-main'>
        <h1>MFE Counter</h1>
        <div className='host-app-main__result'><ResultApp /></div>
        <div className='host-app-main__buttons'><ButtonApp /></div>
      </div>
    </div>
  );
}

export default App;
