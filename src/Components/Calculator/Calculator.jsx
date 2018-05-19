import React, { Component } from 'react';
import './Calculator.css';
import styled from 'styled-components';
import {css} from 'styled-components';

//media queries function
const sizes = {
   desktop: 992,
   tablet: 794,
   phone: 505 ,
   smallPhone:374,
 }
const media = Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
     @media (max-width: ${sizes[label] / 16}em) {
       ${css(...args)}
     }
   `
   return acc
}, {})
/* //use function inside styled components like this:
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;
*/
const CalculatorWrapper = styled.div`
   border: 10px solid #005B91;
   min-height: 330px;
   border-radius: 3px;
   box-shadow: 5px 5px #004771;
   background: #004771;
   display:inline-block;
   width:90%;
   justify-content:center;
   align-items:center;

   margin:10px;
   max-width: 850px;

   ${media.tablet`
      margin: 5px 0px 0px 0px;
      width: 95%;
      box-shadow: none;
   `}
`
const FormWrapper = styled.form`
   display:flex;
   flex-direction: column;
   margin: 10px 3px 10px 3px;
   padding-bottom: 8px;
   max-height: 200px;
   justify-content:center;
   align-items: center;
    border-bottom: 5px dotted #005B91;
    font-weight: bold;
   ${media.tablet`
  
   `}
`

const ButtonCalculate = styled.input`
   flex-grow:1;
    margin: 6px;
   padding: 5px;
   background: #0078BF;
   color: white;
   border-radius: 8px;
   font-weight:bold;
   width: 90%;
   height: 50px;
   font-size: 1.2rem;
//    ${media.tablet`
//       margin: 0px 4px 0px 4px;
//    `}
//    ${media.smallPhone`
//       margin: 0px 2px 0px 2px;
//       padding: 2px;
//       width:70px;
//    `}
`
const ButtonClear = styled.input`
   flex-grow:1;
   margin-left: 15px;
   margin-right: 15px;
   padding: 5px;
   background: #005B91;
   border-radius: 8px;
   color:white;
   font-weight:bold;
   width: 90%;
   height: 40px;
   font-size: 1.15rem;
//    ${media.tablet`
//       margin: 0px 4px 0px 4px;
//    `}
//    ${media.smallPhone`
//       margin: 0px 2px 0px 2px;
//       padding: 2px;
//       width:70px;
      
//    `}
`
const Label = styled.label`
    font-size: 1.2rem;
   color: white;
   font-weight: bold;
//    ${media.tablet`
//       min-width: 85px;
//    `}
//    ${media.smallPhone`
//       font-size: .9em;
//       font-weight:normal;
//    `}
`
const ResetButton = styled.input`
   height: 40px;
   width: 270px;
   font-size: 1.2rem;
   margin: 10px;
   padding: 10px;
   padding: 5px;
   background: #005B91;
   border-radius: 8px;
   color:white;
   font-weight:bold;
`

const InputBox = styled.input`
   height: 35px;
   border-radius: 5px;
   margin: 3px;
   width: 90%;
//    ${media.tablet`

//       width:10vw;
//       min-width:90px;
//    `}
//    ${media.phone`
//       min-width:55px;
//    `}
//    ${media.smallPhone`
//       min-width:30px;
//    `}
`
const StyledOutput = styled.output`
   color: #02FC7D;
   width: 160px;
   font-weight: bold;
   height: 20px;
//    ${media.smallPhone`
//       font-weight:normal;
//       font-size: .9em;
//    `}
`

class Calculator extends Component {

   constructor(){
      super();
   }

  // FUNCTIONS
  
  // Miles to Meters
  convertMilesToMeters = () => {
      document.getElementById('o_milestometers').value = (' '); // clear error message
     
      var num = document.getElementById('milestometers').value;
     
      if (num === "") {
          document.getElementById('o_milestometers').value = ('Enter a number');
      } else {
          var result = num / 0.00062137;

          document.getElementById('o_milestometers').value = (result.toFixed(2) + " meters");
      }
  }



  // Meters to Miles
  convertMetersToMiles = () =>  {
      document.getElementById('o_meterstomiles').value = (' '); // clear error message

      var num = document.getElementById('meterstomiles').value ;

      if (num === "") {
          document.getElementById('o_meterstomiles').value = ('Enter a number');
      } else {
          var result = num * 0.00062137;
          document.getElementById('o_meterstomiles').value = (result.toFixed(2) + " miles");
      }
  }

  // Miles to Kilometers
  convertMilesToKilometers = () => {
      document.getElementById('o_milestokilometers').value = (' '); // clear error message

      var num = document.getElementById('milestokilometers').value;

      if (num === "") {
          document.getElementById('o_milestokilometers').value = ('Enter a number');
      } else {
          var result = num / 0.62137;
          document.getElementById('o_milestokilometers').value = (result.toFixed(2) + " kilometers");
      }
  }


  // Kilometers to Miles
  convertKilometersToMiles = () =>  {
      document.getElementById('o_kilometerstomiles').value = (' '); // clear error message

      var num = document.getElementById('kilometerstomiles').value;

      if (num === "") {
          document.getElementById('o_kilometerstomiles').value = ('Enter a number');
      } else {
          var result = num * 0.62137;
          document.getElementById('o_kilometerstomiles').value = (result.toFixed(2) + " miles");
      }
  }


  // Clear all Values
   clearAll = () => {
      //jquery does not have a reset() method but JS does, so we need to make
      //it look like a JS object with the index position
      
      document.getElementById('frm_milestometers').reset();
      document.getElementById('frm_meterstomiles').reset();
      document.getElementById('frm_milestokilometers').reset();
      document.getElementById('frm_kilometerstomiles').reset();
  }

   render(){
      return (
         <CalculatorWrapper>
            <FormWrapper id="frm_milestometers">
               <Label>Miles to Meters</Label>
               <InputBox id="milestometers" type="number" min="1" />
               <StyledOutput id="o_milestometers" for="milestometers" />
               <ButtonCalculate onClick={this.convertMilesToMeters} type="button" id="btn_milestometers" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />

            </FormWrapper>

            <FormWrapper id="frm_meterstomiles">
               <Label>Meters to Miles</Label>
               <InputBox id="meterstomiles" type="number" min="1" />
               <StyledOutput id="o_meterstomiles" for="meterstomiles" />
               <ButtonCalculate onClick={this.convertMetersToMiles} type="button" id="btn_meterstomiles" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               
            </FormWrapper>
            
            <FormWrapper id="frm_milestokilometers">
               <Label>Miles to Kilometers</Label>
               <InputBox id="milestokilometers" type="number" min="1" />
               <StyledOutput id="o_milestokilometers" for="milestokilometers" />
               <ButtonCalculate onClick={this.convertMilesToKilometers} type="button" id="btn_milestokilometers" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               
            </FormWrapper>
            
            <FormWrapper id="frm_kilometerstomiles">
               <Label>Kilometers to Miles</Label>
               <InputBox id="kilometerstomiles" type="number" min="1" />
               <StyledOutput id="o_kilometerstomiles" for="kilometerstomiles" />
               <ButtonCalculate onClick={this.convertKilometersToMiles} type="button" id="btn_kilometerstomiles" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               
            </FormWrapper>

            <div>
               <ResetButton onClick={this.clearAll} type="button" id="btn_clearall" value="Clear All Values" />
            </div>
         </CalculatorWrapper>
      )
   }
}
export default Calculator;