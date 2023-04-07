function App() {

  const createDigits = () => {
    const digits = [];

    {/* Loop through numbers starting from 1 to 10 and push 
  them as buttons in the digits array*/}
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0


          {/* Operators */}
          <div className="operators">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>

            <button>Del</button>
          </div>

          {/* Digits */}
          <div className="digits">
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
