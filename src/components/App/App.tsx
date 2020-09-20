import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';

function TestComponent () {
  return <img width="16" src="https://image.flaticon.com/icons/png/512/1617/1617460.png" alt="search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Button
          onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent/>}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
