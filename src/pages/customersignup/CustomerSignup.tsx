import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PhoneInputComponent from "../../components/PhoneInput/PhoneInput";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length > 0; // checking if the phone number is not empty for demonstration
  };

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;

    const route = currentPath.startsWith("/customer")
      ? "http://localhost:4000/customer/signup"
      : "http://localhost:4000/admin/signup";

    const res = await axios.post(
      route,
      {
        FirstName: firstName,
        LastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      },
      {
        withCredentials: true, // Include credentials in the request
      }
    );

    if (res.status === 200 && res.data.message) {
      navigate("/customerotp");
    } else if (
      res.status === 200 &&
      (res.data.existingCustomer || res.data.Errormessage)
    ) {
      navigate("/customersignup");
    }
  }
  return (
    <>
      <FormPage
        onsubmit={handleSubmit}
        formTitle="Create an Account"
        buttonText="SIGNUP"
        children={{
          formElement: (
            <>
              <div>
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFirstName(e.currentTarget.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setLastName(e.currentTarget.value)
                    }
                  />
                </label>
              </div>
              <div className="phone-number">
                <label>
                  Phone Number
                  {/* <input
                    type="text"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPhoneNumber(e.currentTarget.value)
                    }
                  /> */}
                  <PhoneInputComponent
                    phoneNumber={phoneNumber}
                    handleChange={handleChange}
                    valid={valid}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </label>
              </div>

              <div>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.currentTarget.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Confirm Password
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setConfirmPassword(e.currentTarget.value)
                    }
                  />
                </label>
              </div>
            </>
          ),
        }}
      ></FormPage>
    </>
  );
}
