import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent () {
  return <img width="16" src="https://image.flaticon.com/icons/png/512/1617/1617460.png" alt="search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <div className="Container">
        <Button
          onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent/>}
        >
          Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
