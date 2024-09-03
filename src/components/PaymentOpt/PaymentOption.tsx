import "../PaymentOpt/PaymentOpt.css";
import { useState } from "react";

function PaymentOption() {
  const [selectedOption, setSelectedOption] = useState("Choose payment Option");
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="body">
      <div className="container">
        <div>
          <h1>Choose how to pay</h1>
          <p className="feint">
            Your Payment is Encrypted and you can cancel change how you pay at
            any time
          </p>
          <p className="lastText">Cancel at Anytime</p>
        </div>

        <p className="encrypt">
          End-to-end encrypted <img src="/images/lock.png" alt="" />
        </p>
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          name=""
          id=""
        >
          <option value="paystack">
            <img src="/images/paystack.png" alt="" />
            Choose payment option
          </option>
          <option value="paystack">
            <img src="/images/paystack.png" alt="" />
            Paystack
          </option>
          <option value="flutterwave">
            <img src="/images/paystack.png" alt="" />
            Flutterwave
          </option>
        </select>
      </div>
    </div>
  );
}

export default PaymentOption;
