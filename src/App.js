import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Calculator from './Components/Calculator/Calculator';
import { css } from 'styled-components';
import Footer from 'styled-components';

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

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledFooter = styled.footer``;

//used to track footer for the page
const PhantomDiv = styled.div`
  display: block;
  padding: 20px;
  height: 60px;
`;

//actual style for footer
const FooterDiv = styled.div`
  background-color: #222;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 45px;
  width: 100%;
  font-weight: bold;
  background-color: #222;
  color: white;
`;

const StyledImg = styled.img`
  @media (max-width: 700px) {
  }
`;

const HeaderDiv = styled.header`
  background-color: #222;
  height: 140px;
  padding: 0px 20px 20px 20px;
  color: white;

  @media (max-width: 474px) {
    font-size: 0.9rem;
    height: 28vw;
    min-height: 110px;
  }
  @media (max-width: 388px) {
    min-height: 90px;
    /* height:50px; */
    font-size: 0.78rem;
    // height: 30vw;
    min-height: 90px;
  }

  @media (max-width: 233px) {
    font-size: 0.71rem;
  }
`;
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
        </HeaderDiv>
        <Calculator />
        <StyledFooter>
          <PhantomDiv />
          <FooterDiv>
            <h4>Miles | Meters | Kilometers</h4>
          </FooterDiv>
        </StyledFooter>
      </StyledApp>
    );
  }
}

export default App;
