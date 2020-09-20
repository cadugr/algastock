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
        <ul>
          {
            ['Daniel', 'Willian', 'Thiago', 'Daniel'].map((name,index) => {
              return <li key={index}>
                {name}
              </li>
            })
          }
        </ul>
      </Container>
    </div>
  );
}

export default App;
