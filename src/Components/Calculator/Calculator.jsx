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
   border-radius: 3px;
   box-shadow: 5px 5px #004771;
   background: #004771;
   display:inline-block;
   width:80%;
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
   
   margin: 10px 0px 10px 0px;
   height: 50px;
   align-items:center;
   justify-content:center;

   ${media.tablet`
  
   `}
`
const ButtonCalculate = styled.input`
   flex-grow:1;
   margin-left: 10px;
   margin-right: 10px;
   padding: 5px;
   background: #0078BF;
   color: white;
   border-radius: 8px;
   font-weight:bold;
   ${media.tablet`
      margin: 0px 4px 0px 4px;
   `}
   ${media.smallPhone`
      margin: 0px 2px 0px 2px;
      padding: 2px;
      width:70px;
   `}
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
   ${media.tablet`
      margin: 0px 4px 0px 4px;
   `}
   ${media.smallPhone`
      margin: 0px 2px 0px 2px;
      padding: 2px;
      width:70px;
      
   `}
`
const Label = styled.label`
   flex-grow:1;
   width: 120px;
   color: white;
   font-weight: bold;
   ${media.tablet`
      min-width: 85px;
   `}
   ${media.smallPhone`
      font-size: .9em;
      font-weight:normal;
   `}
`
const ResetButton = styled.input`
   height: 40px;
   width: 170px;
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
   flex-grow: 2;
   height: 35px;
   border-radius: 5px;
   ${media.tablet`

      width:10vw;
      min-width:90px;
   `}
   ${media.phone`
      min-width:55px;
   `}
   ${media.smallPhone`
      min-width:30px;
   `}
`
const StyledOutput = styled.output`
   color: #02FC7D;
   width: 160px;
   font-weight: bold;
   ${media.smallPhone`
      font-weight:normal;
      font-size: .9em;
   `}
`

class Calculator extends Component {

   constructor(){
      super();
   }

   componentDidMount(){

   }
 
  // FUNCTIONS
  
  // Miles to Meters
  convertMilesToMeters = () => {
      document.getElementById('o_milestometers').value = (' '); // clear error message
     
      var num = document.getElementById('milestometers').value;
     
      if (num == "") {
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

      if (num == "") {
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

      if (num == "") {
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

      if (num == "") {
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
               <ButtonCalculate onClick={this.convertMilesToMeters} type="button" id="btn_milestometers" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               <StyledOutput id="o_milestometers" for="milestometers" />
            </FormWrapper>

            <FormWrapper id="frm_meterstomiles">
               <Label>Meters to Miles</Label>
               <InputBox id="meterstomiles" type="number" min="1" />
               <ButtonCalculate onClick={this.convertMetersToMiles} type="button" id="btn_meterstomiles" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               <StyledOutput id="o_meterstomiles" for="meterstomiles" />
            </FormWrapper>

            <FormWrapper id="frm_milestokilometers">
               <Label>Miles to Kilometers</Label>
               <InputBox id="milestokilometers" type="number" min="1" />
               <ButtonCalculate onClick={this.convertMilesToKilometers} type="button" id="btn_milestokilometers" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               <StyledOutput id="o_milestokilometers" for="milestokilometers" />
            </FormWrapper>

            <FormWrapper id="frm_kilometerstomiles">
               <Label>Kilometers to Miles</Label>
               <InputBox id="kilometerstomiles" type="number" min="1" />
               <ButtonCalculate onClick={this.convertKilometersToMiles} type="button" id="btn_kilometerstomiles" value="Calculate" />
               <ButtonClear type="reset" value="Clear" />
               <StyledOutput id="o_kilometerstomiles" for="kilometerstomiles" />
            </FormWrapper>

            <div>
               <ResetButton onClick={this.clearAll} type="button" id="btn_clearall" value="Clear All Values" />
            </div>
         </CalculatorWrapper>
      )
   }
}
export default Calculator;