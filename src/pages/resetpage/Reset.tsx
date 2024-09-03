import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ResetPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;

    if (currentPath.startsWith("/customer")) {
      const res = await axios.post(
        "http://localhost:4000/customer/reset-password",
        {
          email: email,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200 && res.data.message) {
        navigate("");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        navigate("/customerresetpage");
      }
    } else if (currentPath.startsWith("/admin")) {
      const res = await axios.post(
        "http://localhost:4000/restaurant/reset-password",
        {
          email: email,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200 && res.data.message) {
        navigate("");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        navigate("/adminresetpage");
      }
    }
  }
  return (
    <FormPage
      onsubmit={handleSubmit}
      formTitle="Reset your Password"
      buttonText="Send reset instructions"
      children={{
        formElement: (
          <>
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
          </>
        ),
      }}
    ></FormPage>
  );
}

export default ResetPage;
