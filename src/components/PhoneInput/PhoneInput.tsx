import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import "./phone.css";

interface phoneInputProps {
  phoneNumber: string;
  handleChange: (value: string) => void;
  valid: boolean;
}
function PhoneInputComponent({
  phoneNumber,
  handleChange,
  valid,
}: phoneInputProps) {
  return (
    <div className="phone-input-container">
      <PhoneInput
        country={"NGN"}
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{
          required: true,
          autoFocus: true,
        }}
      />
      {!valid && <p>Please enter a valid phone number</p>}
    </div>
  );
}

export default PhoneInputComponent;
