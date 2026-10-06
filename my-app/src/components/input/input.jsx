import "./Input.css";

function Input({ inpuitValue, handleInputChangeEvent }) {
  return (
    <input type="text" value={inpuitValue} onChange={handleInputChangeEvent} />
  );
}

export default Input;
