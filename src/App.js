import React, { Component } from 'react';

import './App.css';
import styled from 'styled-components';
import Calculator from './Components/Calculator/Calculator';
import { css } from 'styled-components';

//media queries function
const sizes = {
  desktop: 992,
  tablet: 794,
  phone: 505,
  smallPhone: 374
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

//css styling using Styled-Components
const StyledApp = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  align-items: center;
`;
//footer container
const StyledFooter = styled.div`
  width: 100vw;
`;
//text container in footer
const FooterDiv = styled.div`
  background-color: #222;
  text-align: center;
  padding: 1px;
  font-weight: bold;
  background-color: #222;
  color: white;
`;

const StyledImg = styled.img`
  height: 75px;
  margin: 0px 3px 0px 3px;
`;

const HeaderDiv = styled.header`
  text-align: center;
  margin: 0px;
  display: flex;
  justify-content: center;
  background-color: #222;
  height: 70px;
  width: 100%;
  color: white;
`;

//App component holds 3 flexbox containers:
// 1) App header with title and icons
// 2) Calculator component
// 3) Footer
class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <HeaderDiv className="App-header">
          <StyledImg
            src="https://images.vexels.com/media/users/3/127167/isolated/preview/053ac83df72349720ebf10f2f998d0b7-blue-calculator-icon-svg-by-vexels.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Distance Converter for Athletes</h1>
          <StyledImg
            src="https://images.vexels.com/media/users/3/127167/isolated/preview/053ac83df72349720ebf10f2f998d0b7-blue-calculator-icon-svg-by-vexels.png"
            className="App-logo"
            alt="logo"
          />
        </HeaderDiv>
        <Calculator />
        <StyledFooter>
          <FooterDiv>
            <h4>Miles | Meters | Kilometers</h4>
          </FooterDiv>
        </StyledFooter>
      </StyledApp>
    );
  }
}

export default App;
