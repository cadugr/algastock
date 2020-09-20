import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input/Input';

function TestComponent () {
  return <img width="16" src="https://image.flaticon.com/icons/png/512/1617/1617460.png" alt="search icon"/>
}

function App() {
  const [street, setStreet] = useState('')
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
        <Input label="Street"
               placeholder="E.g.: 15th Avenue"
               value={street}
               onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
