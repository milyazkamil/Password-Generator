const PasswordCopy = ({ copyResult }) => {

  const copyTextToClipboard = () => {
    // Check if the Clipboard API is available
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(copyResult)
        .then(() => {
          alert('Password copied to clipboard: ' + copyResult)
        })
        .catch((error) => {
          console.error('Unable to copy password: ', error)
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const tempInput = document.createElement('textarea');
      tempInput.value = copyResult;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Password copied to clipboard: ' + copyResult);
    }
  }
  return (
    <div className="password-container">
      <span>{copyResult}</span>
      <span onClick={copyTextToClipboard} className="copy-button">
        <i className="fa-regular fa-copy"></i>
      </span>
    </div>
  )
}
export default PasswordCopy;