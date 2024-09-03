import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;

    if (currentPath.startsWith("/customer")) {
      const route = "http://localhost:4000/customer/login";

      const res = await axios.post(
        route,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );

      if (res.status === 200 && res.data.customer) {
        console.log('Login successful:', res.data.customer);
        navigate("/customerdashboard");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        console.log('Login failed:', res.data.existingCustomer || res.data.Errormessage);
        navigate("/customerlogin");
      }
    } else if (currentPath.startsWith("/admin")) {
      const route = "http://localhost:4000/restaurant/login";

      const res = await axios.post(
        route,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );

      if (res.status === 200 && res.data.restaurant) {
        console.log('Login successful:', res.data.restaurant);
        navigate("/addMenu");
      } else if (
        res.status === 200 &&
        (res.data.existingRestaurant || res.data.Errormessage)
      ) {
        console.log('Login failed:', res.data.existingRestaurant || res.data.Errormessage);
        navigate("/adminlogin");
      }
    }
  }

  return (
    <FormPage
      onsubmit={handleSubmit}
      formTitle="Welcome back to Food Truck"
      buttonText="LOG IN"
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
          </>
        ),
      }}
    ></FormPage>
  );
}
