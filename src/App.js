import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Calculator from './Components/Calculator/Calculator';
import css from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <header className="App-header">
          <img
            src="https://images.vexels.com/media/users/3/127167/isolated/preview/053ac83df72349720ebf10f2f998d0b7-blue-calculator-icon-svg-by-vexels.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Distance Converter for Athletes</h1>
        </header>
        <Calculator />
      </StyledApp>
    );
  }
}

export default App;
