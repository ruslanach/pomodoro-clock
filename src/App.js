import React, {useState} from 'react';
import classes from "./App.css";

// class clock_25_5 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayValue: "0",
//             formula: "0",
//             evaluated: false,
//         };
//         this.handleNumberClick = this.handleNumberClick.bind(this);
//         this.handleOperatorClick = this.handleOperatorClick.bind(this);
//         this.handleDecimalClick = this.handleDecimalClick.bind(this);
//         this.handleClearClick = this.handleClearClick.bind(this);
//         this.handleEqualsClick = this.handleEqualsClick.bind(this);
//     }
//
//     handleNumberClick(e) {
//         if (this.state.evaluated) {
//             this.setState({
//                 displayValue: e.target.value,
//                 formula: e.target.value !== "0" ? e.target.value : "",
//                 evaluated: false,
//             });
//         } else {
//             if (this.state.displayValue === "0") {
//                 this.setState({
//                     displayValue: e.target.value,
//                     formula: e.target.value !== "0" ? e.target.value : "",
//                 });
//             } else {
//                 this.setState((prevState) => ({
//                     displayValue: prevState.displayValue + e.target.value,
//                     formula: prevState.formula + e.target.value,
//                 }));
//             }
//         }
//     }
//
//     handleOperatorClick(e) {
//         const operators = ["+", "-", "*", "/"];
//         const lastChar = this.state.formula.slice(-1);
//         if (!operators.includes(lastChar) && this.state.formula !== "") {
//             this.setState((prevState) => ({
//                 displayValue: e.target.value,
//                 formula: prevState.formula + e.target.value,
//                 evaluated: false,
//             }));
//         } else if (lastChar === "-" && this.state.formula.length === 1) {
//             this.setState({
//                 displayValue: e.target.value,
//                 formula: e.target.value,
//                 evaluated: false,
//             });
//         } else if (lastChar !== "-" && this.state.formula.length > 1) {
//             this.setState((prevState) => ({
//                 displayValue: e.target.value,
//                 formula: prevState.formula.slice(0, -1) + e.target.value,
//                 evaluated: false,
//             }));
//         }
//     }
//
//     handleDecimalClick() {
//         const lastNum = this.state.displayValue.slice(-1);
//         if (!this.state.displayValue.includes(".") && !isNaN(lastNum)) {
//             this.setState((prevState) => ({
//                 displayValue: prevState.displayValue + ".",
//                 formula: prevState.formula + ".",
//             }));
//         }
//     }
//
//     handleClearClick() {
//         this.setState({
//             displayValue: "0",
//             formula: "",
//             evaluated: false,
//         });
//     }
//
//     handleEqualsClick() {
//         const result = eval(this.state.formula);
//         this.setState({
//             displayValue: result.toString(),
//             formula: this.state.formula + "=" + result.toString(),
//             evaluated: true,
//         });
//     }
//
//     render() {
//         return (
//             <div className={classes.app}>
//                 <div className={classes.formulaScreen} id="formulaScreen"> {this.state.formula}</div>
//                 <div className={classes.outputScreen} id="display">{this.state.displayValue}</div>
//
//                 <div id="clock_25_5">
//
//                     <button id="clear" onClick={this.handleClearClick}>
//                         AC
//                     </button>
//                     <button id="divide" value="/" onClick={this.handleOperatorClick}>
//                         /
//                     </button>
//                     <button id="multiply" value="*" onClick={this.handleOperatorClick}>
//                         x
//                     </button>
//                     <button id="seven" value="7" onClick={this.handleNumberClick}>
//                         7
//                     </button>
//                     <button id="eight" value="8" onClick={this.handleNumberClick}>
//                         8
//                     </button>
//                     <button id="nine" value="9" onClick={this.handleNumberClick}>
//                         9
//                     </button>
//                     <button id="subtract" value="-" onClick={this.handleOperatorClick}>
//                         -
//                     </button>
//                     <button id="four" value="4" onClick={this.handleNumberClick}>
//                         4
//                     </button>
//                     <button id="five" value="5" onClick={this.handleNumberClick}>
//                         5
//                     </button>
//                     <button id="six" value="6" onClick={this.handleNumberClick}>
//                         6
//                     </button>
//                     <button id="add" value="+" onClick={this.handleOperatorClick}>
//                         +
//                     </button>
//                     <button id="one" value="1" onClick={this.handleNumberClick}>
//                         1
//                     </button>
//                     <button id="two" value="2" onClick={this.handleNumberClick}>
//                         2
//                     </button>
//                     <button id="three" value="3" onClick={this.handleNumberClick}>
//                         3
//                     </button>
//                     <button id="zero" value="0" onClick={this.handleNumberClick}>
//                         0
//                     </button>
//                     <button id="decimal" onClick={this.handleDecimalClick}>
//                         .
//                     </button>
//                     <button id="equals" onClick={this.handleEqualsClick}>
//                         =
//                     </button>
//                 </div>
//                 <div className="author"> Coded By <a href="" target="_blank">Ruslana Chaika</a></div>
//
//             </div>
//         );
//     }
// }

// export default clock_25_5;
// const  clock_25_51=()=>{
//     const [num1, setNum1] = useState("");
//     const [num2, setNum2] = useState("");
//     const [operator, setOperator] = useState("");
//     const [result, setResult] = useState("");
//
//     const handleNum1Change = (event) => {
//         setNum1(event.target.value);
//     }
//
//     const handleNum2Change = (event) => {
//         setNum2(event.target.value);
//     }
//
//     const handleOperatorChange = (event) => {
//         setOperator(event.target.value);
//     }
//
//     const handleCalculate = () => {
//         let res;
//         switch(operator) {
//             case "+":
//                 res = Number(num1) + Number(num2);
//                 break;
//             case "-":
//                 res = Number(num1) - Number(num2);
//                 break;
//             case "*":
//                 res = Number(num1) * Number(num2);
//                 break;
//             case "/":
//                 res = Number(num1) / Number(num2);
//                 break;
//             default:
//                 res = "";
//         }
//         setResult(res);
//     }
//
//     return (
//         <div>
//             <div id="app">
//                 <div>
//                     <div className="clock_25_5">
//                         <div className="formulaScreen"></div>
//                         <div className="outputScreen" id="display">0</div>
//                         <div>
//                             <button className="jumbo" id="clear" value="AC" >AC
//                             </button>
//                             <button id="divide" value="/" >/</button>
//                             <button id="multiply" value="x" >x</button>
//                             <button id="seven" value="7">7</button>
//                             <button id="eight" value="8">8</button>
//                             <button id="nine" value="9">9</button>
//                             <button id="subtract" value="‑" >‑</button>
//                             <button id="four" value="4">4</button>
//                             <button id="five" value="5">5</button>
//                             <button id="six" value="6">6</button>
//                             <button id="add" value="+" >+</button>
//                             <button id="one" value="1">1</button>
//                             <button id="two" value="2">2</button>
//                             <button id="three" value="3">3</button>
//                             <button className="jumbo" id="zero" value="0">0</button>
//                             <button id="decimal" value=".">.</button>
//                             <button id="equals" value="=">= </button>
//                         </div>
//                     </div>
//                     <div className="author"> Designed and Coded By <a href="https://goo.gl/6NNLMG" target="_blank">Ruslana Chaika</a></div>
//                 </div>
//             </div>
//
//
//             <input type="number" value={num1} onChange={handleNum1Change} />
//             <select value={operator} onChange={handleOperatorChange}>
//                 <option value="+">+</option>
//                 <option value="-">-</option>
//                 <option value="*">*</option>
//                 <option value="/">/</option>
//             </select>
//             <input type="number" value={num2} onChange={handleNum2Change} />
//             <button onClick={handleCalculate}>=</button>
//             <div>{result}</div>
//         </div>
//     );
// }







