import { useState } from "react";

const CharacterLength = ({ onChange }) => {
  const [rangeValue, setRangeValue] = useState(0);
  
  const sendDataToApp = (e) => {
    const newValue = e.target.value;
    setRangeValue(newValue);
    onChange(newValue);
  }

  return (
    <>
      <div className="character-length-container">
        <div className="character-length-title">
          <p>Character Length</p>
          <span className="range-value">{rangeValue}</span>
        </div>
        <input onChange={sendDataToApp} type="range" id="character-length" min={0} max={20} value={rangeValue} />
      </div>
    </>
  )
}
export default CharacterLength;