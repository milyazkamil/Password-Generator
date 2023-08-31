import ArrowSvg from "./ArrowSvg";

const GenerateButton = ({ generatePassword }) => {
  return (
    <button type="button" onClick={generatePassword} className="generate-btn">
      GENERATE
      <span>
        <ArrowSvg />
      </span>
    </button>
  )
}
export default GenerateButton;