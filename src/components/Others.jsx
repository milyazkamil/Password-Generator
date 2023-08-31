import GenerateButton from './GenerateButton'
import Options from './Options'
import Strength from './Strength'

const Others = ({ strengthColors, onClick, onChange, generatePassword }) => {
  return (
    <div className="body-container">
      <Options onClick={onClick} onChange={onChange} />
      <Strength strengthColors={strengthColors} />
      <GenerateButton generatePassword={generatePassword} />
    </div>
  )
}
export default Others
