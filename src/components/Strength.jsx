import StrengthSquare from "./StrengthSquare";

const Strength = ({ strengthColors }) => {
  return (
    <>
      <div className="strength-container">
        <span className="strength-title">STRENGTH</span>
        <div className="strength-squares-container">
          <StrengthSquare strengthColors={strengthColors} />
        </div>
      </div>
    </>
  )
}
export default Strength;