import { useState } from "react"
import Others from "./Others"
import PasswordCopy from "./PasswordCopy"

function App() {

  const [checkbox1, setCheckbox1] = useState('false');
  const [checkbox2, setCheckbox2] = useState('false');
  const [checkbox3, setCheckbox3] = useState('false');
  const [checkbox4, setCheckbox4] = useState('false');

  const [rangeValue, setRangeValue] = useState(0);
  const [copyResult, setCopyResult] = useState('P4Q5k@e3!');

  const symbols = '!@#$%^&*()_+-={}[]|:;<>,.?/~';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbolsArray = symbols.split('');
  const lowercaseArray = letters.split('');
  const uppercaseArray = letters.toUpperCase().split('');

  let password = [];
  let result = [];

  let numbersPassword = [];
  let symbolsPassword = [];
  let lowercasePassword = [];
  let uppercasePassword = [];

  const getData = (e) => {
    if (e.target.id === "number") {
      setCheckbox1(e.target.value);
    }

    if (e.target.id === 'symbol') {
      setCheckbox2(e.target.value);
    }

    if (e.target.id === 'lowercase') {
      setCheckbox3(e.target.value);
    }

    if (e.target.id === 'uppercase') {
      setCheckbox4(e.target.value);
    }
  }

  const getRange = (e) => {
    const newValue = e;
    setRangeValue(newValue);
  }

  const generatePassword = () => {
    if ( checkbox1 === "false" &&
         checkbox2 === "false" &&
         checkbox3 === "false" &&
         checkbox4 === "false" ) {
         setCopyResult('Please select at least one checkbox');
    } else if (rangeValue < 1) {
      setCopyResult('Please make the range at least 1')
    } else {
      if (checkbox1 === 'true') {
        numbersPassword = [...numbersArray]
      } else {
        numbersPassword = []
      }

      if (checkbox2 === 'true') {
        symbolsPassword = [...symbolsArray]
      } else {
        symbolsPassword = []
      }

      if (checkbox3 === 'true') {
        lowercasePassword = [...lowercaseArray]
      } else {
        lowercasePassword = []
      }

      if (checkbox4 === 'true') {
        uppercasePassword = [...uppercaseArray]
      } else {
        uppercasePassword = []
      }

      password = [
        ...numbersPassword,
        ...symbolsPassword,
        ...lowercasePassword,
        ...uppercasePassword,
      ];

      for (let i = 0; i < rangeValue; i++) {
        result[i] = password[Math.floor(Math.random() * password.length)];
      }
      setCopyResult(result.join(''));
    }
  }

  return (
    <>
      <main className="main">
        <h1 className="main-title">Password Generator</h1>
        <PasswordCopy copyResult={copyResult} />
        <Others
          strengthColors={{
            strengthColor1: checkbox1,
            strengthColor2: checkbox2,
            strengthColor3: checkbox3,
            strengthColor4: checkbox4,
          }}
          onChange={getRange}
          onClick={getData}
          generatePassword={generatePassword}
        />
      </main>
    </>
  )
}
export default App
