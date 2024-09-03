import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DeliveryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;
    if (currentPath.startsWith("/customer")) {
      const res = await axios.post(
        "http://localhost:4000/customer/addDelivery",
        {
          name: name,
          email: email,
          address: address,
          phoneNumber: phoneNumber,
          city: city,
          state: state,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200 && res.data.message) {
        navigate("/customerlogin");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        navigate("/customerdelivery");
      }
    }
  }
  return (
    <FormPage
      onsubmit={handleSubmit}
      formTitle="Add your Delivery Information"
      buttonText="Save and Continue"
      children={{
        formElement: (
          <>
            <div>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.currentTarget.value)
                  }
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.currentTarget.value)
                  }
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
                Phone number
                <input
                  type="text"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.currentTarget.value)
                  }
                />
              </label>
            </div>
            <div className="location">
              <div>
                <label>
                  City
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCity(e.currentTarget.value)
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
            </div>
          </>
        ),
      }}
    ></FormPage>
  );
}
