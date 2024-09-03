import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;

    if (currentPath.startsWith("/customer")) {
      const res = await axios.post(
        `http://localhost:4000/customer/reset-password/${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
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
        navigate("/customerresetpage");
      }
    } else if (currentPath.startsWith("/admin")) {
      const res = await axios.post(
        `http://localhost:4000/restaurant/reset-password/${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200 && res.data.message) {
        navigate("/adminlogin");
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
      formTitle="Reset your password"
      buttonText="Reset Password"
      children={{
        formElement: (
          <>
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
  );
}

export default ChangePassword;
