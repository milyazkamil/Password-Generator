const StrengthSquare = ({ strengthColors }) => {
  const { strengthColor1, strengthColor2, strengthColor3, strengthColor4 } = strengthColors;
  return (
    <>
      <div
        className={`square ${strengthColor4 === 'true' ? 'dark' : 'light'}`}
      ></div>
      <div
        className={`square ${strengthColor3 === 'true' ? 'dark' : 'light'}`}
      ></div>
      <div
        className={`square ${strengthColor2 === 'true' ? 'dark' : 'light'}`}
      ></div>
      <div
        className={`square ${strengthColor1 === 'true' ? 'dark' : 'light'}`}
      ></div>
    </>
  )
}
export default StrengthSquare;