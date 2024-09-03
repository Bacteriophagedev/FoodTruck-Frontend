import { FormEvent, useState, ChangeEvent } from "react";
import FormPage from "../../components/formPage/FormPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PhoneInputComponent from "../../components/PhoneInput/PhoneInput";

function AdminSignup() {
  const [nameofRestaurant, setnameofRestaurant] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [logo, setLogo] = useState<File | null>(null); // Change logo state type to File | null
  const [address, setAddress] = useState("");
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

    const formData = new FormData();
    formData.append("nameofRestaurant", nameofRestaurant);
    formData.append("email", email);
    formData.append("state", state);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    formData.append("password", password);
    if (logo) {
      formData.append("logo", logo); // Append the logo file to the FormData object
    }

    const currentPath = location.pathname;
    const route = currentPath.startsWith("/admin")
      ? "http://localhost:4000/restaurant/signup"
      : "http://localhost:4000/customer/signup";

    try {
      const res = await axios.post(route, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type for file uploads
        },
      });

      if (res.status === 201 && res.data.message) {
        navigate("/adminotp");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        navigate("/adminsignup");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately
    }
  }

  return (
    <FormPage
      onsubmit={handleSubmit}
      formTitle="Create an Account"
      buttonText="SIGNUP"
      children={{
        formElement: (
          <>
            <div>
              <label>
                Restaurant
                <input
                  type="text"
                  name="nameofRestaurant"
                  value={nameofRestaurant}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setnameofRestaurant(e.currentTarget.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.currentTarget.value)
                  }
                />
              </label>
            </div>
            <div>
              <label>
                State
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState(e.currentTarget.value)
                  }
                />
              </label>
            </div>
            <div className="upload">
              <label>
                Upload an Image
                <input
                  type="file"
                  accept="image/*"
                  name="logo"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLogo(e.target.files ? e.target.files[0] : null) // Set the logo state to the file object
                  }
                />
              </label>
            </div>
            <div className="phone-number">
              <label>
                Phone Number
                <PhoneInputComponent
                  phoneNumber={phoneNumber}
                  handleChange={handleChange}
                  valid={valid}
                />
              </label>
            </div>
            <div>
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAddress(e.currentTarget.value)
                  }
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
    />
  );
}

export default AdminSignup;
