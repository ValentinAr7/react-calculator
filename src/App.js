import { useState } from "react";

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];


  const updateCalc = value => {

    {/* If there is no number input user cannot input operator
   If last input is operator user cannot input another operator */}
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => {
    const digits = [];

    {/* Loop through numbers starting from 1 to 10 and push 
  them as buttons in the digits array*/}
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits
  }


  //Display the final calculation
  const calculate = () => {
    setCalc(eval(calc).toString())
  }


  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    //Delete last input
    const value = calc.slice(0, -1)
    setCalc(value)
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || 0}
        </div>

        {/* Operators */}
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>Del</button>
        </div>

        {/* Digits */}
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
