import { useState } from "react";

const Checkbox = ({ id, text, onClick}) => {
  const [value, setValue] = useState(true);

  const changeValue = (e) => {
    setValue(!value);
    onClick(e);
  };

  return (
    <>
      <div className="checkbox-container">
        <input
          id={id}
          onChange={changeValue}
          value={value}
          className="checkbox"
          type="checkbox"
        />
        <label htmlFor={id}>
          {text}
        </label>
      </div>
    </>
  )
}
export default Checkbox;















  // const mesaj = () => {
  //   setCheckboxValue(!checkboxValue);
  // };


  // const symbols = "!@#$%^&*()_+-={}[]|\:;<>,.?/~";
  // const letters = "abcdefghijklmnopqrstuvwxyz"; 

  // const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const symbolsArray = symbols.split("");
  // const lowercaseArray = letters.split("");
  // const uppercaseArray = letters.toUpperCase().split("");
  // let password = [];
  // const main = [];


  // let numbersPassword = []
  // let symbolsPassword = []
  
  // const message = (e) => {
  //   setCheckboxValue(!checkboxValue);

    

    // if (e.target.id === 'lowercase') {
    //   if (e.target.value === 'true') {
    //     password = [...password, ...lowercaseArray]
    //   }
    // }
    // if (e.target.id === 'uppercase') {
    //   if (e.target.value === 'true') {
    //     password = [...password, ...uppercaseArray]
    //   }
    // }

    // for (let i = 0; i < password.length; i++) {
    //   main[i] = password[Math.floor(Math.random() * password.length)]
    // }

    // console.log(password)
    // console.log(main.join(''))
  // }

  

  // if (true) {
  //   password = [...password, ...numbersArray];
  // }
  // if (true) {
  //   password = [...password, ...symbolsArray];
  // }
  // if (false) {
  //   password = [...password, ...lowercaseArray];
  // }
  // if (false) {
  //   password = [...password, ...uppercaseArray];
  // }

  // for (let i = 0; i < password.length; i++) {
  //   main[i] = password[Math.floor(Math.random() * password.length)];
  // }

  // console.log(password);
  // console.log(main.join(""));