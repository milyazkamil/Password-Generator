import { checkboxes } from "../data";
import CharacterLength from "./CharacterLength";
import Checkbox from "./Checkbox";

const Options = ({ onClick, onChange }) => {
  return (
    <>
      <div className="checkboxes-container">
        <CharacterLength onChange={onChange} />
        {
          checkboxes.map((checkbox) => {
            const {id, text} = checkbox;
            return (
              <Checkbox
                key={checkbox.id}
                id={id}
                text={text}
                onClick={onClick}
              />
            )
          })
        }
      </div>
    </>
  )
}
export default Options;