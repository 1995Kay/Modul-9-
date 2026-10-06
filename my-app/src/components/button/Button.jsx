import "./Button.css";

function Button({ className, buttonValue, handleButtonClickEvent }) {
  return (
    <button className={className} onClick={handleButtonClickEvent}>
      {buttonValue}
    </button>
  );
}

export default Button;
