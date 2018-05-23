import React, { Component } from 'react';
import './Calculator.css';
import styled from 'styled-components';

//css styling using Styled-Components
const CalculatorWrapper = styled.div`
   border: 10px solid #005B91;
   min-height: 330px;
   border-radius: 3px;
   box-shadow: 5px 5px #004771;
   background: #004771;
   display:inline-block;
   width:90%;
   max-width: 700px;
   justify-content:center;
   align-items:center;
   min-width: 250px;
   @media (min-height: 800px ) {
        margin-bottom: 20%;
   }
   @media (min-width: 300px ) {
    
    }
`
const FormWrapper = styled.form`
   display:flex;
   flex-direction: column;
   margin: 10px 3px 10px 3px;
   padding-bottom: 8px;
   max-height: 400px;
   justify-content:center;
   align-items: center;
    border-bottom: 5px dotted #005B91;
    font-weight: bold;
    min-width: 250px;
`
const Label = styled.label`
   font-size: 1.6rem;
   padding: 4px;
   color: white;
   font-weight: bold;
   margin-bottom: 10px;
   text-decoration: underline;

   text-shadow: 3px 3px #222;
   border-radius: 3px;
`
const ButtonCalculate = styled.input`
   flex-grow:1;
   margin: 20px 0px 10px 0px;  
   padding: 5px;
   background: #0078BF;
   color: white;
   border-radius: 8px;
   font-weight:bold;
   width: 50%;
   height: 50px;
   font-size: 1.2rem;

`

const ResetButton = styled.input`
   height: 40px;
   width: 50%;
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
   width: 70%;
    font-size: 1.1rem
`
const StyledOutput = styled.output`
   color: #02FC7D;
   width: 160px;
   font-weight: bold;
   height: 20px;
`

const Select = styled.select`
   width: 70%;
   height: 40px;
   font-size: 1.1rem;
   cursor:pointer;
   text-align-last:center;
   direction: ltr;

   background: #0078BF;
   color: white;
   border-radius: 9px;
   box-shadow: inset -2px -3px 1px #000;
`
const Option = styled.option`
   border: 1px solid red;
   padding: 2px;
`
//Calculator component has a state to check which conversion to do
class Calculator extends Component {
   constructor(){
      super();
      this.state = {
          selectedConversion : "Miles to Meters",
      }
   }

  // FUNCTIONS

  //when a new selection is chosen from the dropdown, update the state.
  // (header text is populated from state, so it will update here automatically)
  handleChange = (event) => {
    this.setState({selectedConversion : event.target.value});
 }

  //"Calculate" is clicked: select the current conversion and use its function
  convert = () => {
      console.log(this.state.selectedConversion);
      switch(this.state.selectedConversion){
          case "Miles to Meters": this.convertMilesToMeters();
                                  break;
        case "Meters to Miles" : this.convertMetersToMiles();
                                break;
        case "Miles to Kilometers": this.convertMilesToKilometers();
                                break;
        case "Kilometers to Miles": this.convertKilometersToMiles();
                                    break;
        default: console.log(this.state.selectedConversion);
      }
  }

  //clear input and output texts
  clear = () => {
    document.getElementById('calc_output').value = "";
    document.getElementById('calc_input').value = "";
  }

  // Miles to Meters
  convertMilesToMeters = () => {
      document.getElementById('calc_output').value = (' '); // clear error message
     
      var num = document.getElementById('calc_input').value;
     
      if (num === "") {
          document.getElementById('calc_output').value = ('Enter a number');
      } else {
          var result = num / 0.00062137;

          document.getElementById('calc_output').value = (result.toFixed(2) + " meters");
      }
  }

  // Meters to Miles
  convertMetersToMiles = () =>  {
      document.getElementById('calc_output').value = (' '); // clear error message

      var num = document.getElementById('calc_input').value ;

      if (num === "") {
          document.getElementById('calc_output').value = ('Enter a number');
      } else {
          var result = num * 0.00062137;
          document.getElementById('calc_output').value = (result.toFixed(2) + " miles");
      }
  }

  // Miles to Kilometers
  convertMilesToKilometers = () => {
      document.getElementById('calc_output').value = (' '); // clear error message

      var num = document.getElementById('calc_input').value;

      if (num === "") {
          document.getElementById('calc_output').value = ('Enter a number');
      } else {
          var result = num / 0.62137;
          document.getElementById('calc_output').value = (result.toFixed(2) + " kilometers");
      }
  }


  // Kilometers to Miles
  convertKilometersToMiles = () =>  {
      document.getElementById('calc_output').value = (' '); // clear error message

      var num = document.getElementById('calc_input').value;

      if (num === "") {
          document.getElementById('calc_output').value = ('Enter a number');
      } else {
          var result = num * 0.62137;
          document.getElementById('calc_output').value = (result.toFixed(2) + " miles");
      }
  }

   render(){
      return (
         <CalculatorWrapper>
            <FormWrapper id="frm_calculator">
               <Label id="convert-label">{this.state.selectedConversion}</Label>
               <InputBox id="calc_input" type="number" min="1" />
               <StyledOutput id="calc_output" for="milestometers" />

                <Select value={this.state.selectedConversion} onChange={this.handleChange}>
                    <Option value="Miles to Meters"> Miles => Meters  </Option>
                    <Option value="Meters to Miles"> Meters => Miles </Option>
                    <Option value="Miles to Kilometers"> Miles => Kilometers </Option>
                    <Option value="Kilometers to Miles"> Kilometers => Miles </Option>
                </Select>
                <ButtonCalculate onClick={this.convert} type="button" id="btn_milestometers" value="Calculate" />

            </FormWrapper>

            <div>
               <ResetButton onClick={this.clear} type="button" id="btn_clearall" value="Clear Value" />
            </div>
         
         </CalculatorWrapper>
      )
   }
}
export default Calculator;