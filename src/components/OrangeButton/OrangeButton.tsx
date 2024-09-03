import "./OrangeButton.css";

function OrangeButton({buttonText, onClick}) {
  return <button type="submit" className="orange-button" onClick={onClick}>{buttonText}</button>;
}

export default OrangeButton;
