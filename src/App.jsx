// import { useState } from 'react'
// import './App.css'

// const getDotsForDie = function (number) {
//   const dotList = [];
//   switch (number) {
//     case 1:
//       dotList.push('middle');
//       break;
//     case 2:
//       dotList.push('top-right', 'bottom-left');
//       break;
//     case 3:
//       dotList.push('top-right', 'bottom-left', 'middle');
//       break;
//     case 4:
//       dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right');
//       break;
//     case 5:
//       dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle');
//       break;
//     case 6:
//       dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle-left', 'middle-right');
//       break;
//   }

//   return (
//     <>
//       {dotList.map(dotClass => (
//         <div className={`dot ${dotClass}`}></div>
//       ))}
//     </>
//   );
// }

// function InputForm({ setCount }) {
//   const [inputValue, setInputValue] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const parsed = parseInt(inputValue, 10);
//     if (!isNaN(parsed)) {
//       setCount(parsed);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="input-form">
//       <h1>Number of dice</h1>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       <input type="submit" value="Roll" />
//     </form>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="roll-game">
//       <InputForm setCount={setCount} />
//       <div className="board">
//         {
//          Array.from({length: count}).map((_, i) => {
//           const randomNumber = Math.ceil(Math.random() * 6);
//           return (
//             <div className="dice">
//               {getDotsForDie(randomNumber)}
//             </div>
//           )
//          })
//         }
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'

const getDotsForDie = function (number) {
  const dotList = [];
  switch (number) {
    case 1:
      dotList.push('middle');
      break;
    case 2:
      dotList.push('top-right', 'bottom-left');
      break;
    case 3:
      dotList.push('top-right', 'bottom-left', 'middle');
      break;
    case 4:
      dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right');
      break;
    case 5:
      dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle');
      break;
    case 6:
      dotList.push('top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle-left', 'middle-right');
      break;
  }

  return (
    <>
      {dotList.map((dotClass, i) => (
        <div key={i} className={`dot ${dotClass}`}></div>
      ))}
    </>
  );
}

function InputForm({ onRoll }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 100) {
      onRoll(parsed);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <h1>Number of dice</h1>
      <input
        type="number"
        min="1"
        max="100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Roll" />
    </form>
  );
}

function App() {
  const [diceValues, setDiceValues] = useState([]);

  const handleRoll = (count) => {
    const newRolls = Array.from({ length: count }, () =>
      Math.ceil(Math.random() * 6)
    );
    setDiceValues(newRolls);
  }

  return (
    <div className="roll-game">
      <InputForm onRoll={handleRoll} />
      <div className="board">
        {diceValues.map((value, i) => (
          <div key={i} className="dice">
            {getDotsForDie(value)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
