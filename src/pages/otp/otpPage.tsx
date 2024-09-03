import FormPage from "../../components/formPage/FormPage";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function OtpPage() {
  const [otp, setOtp] = useState("");
 
  const navigate = useNavigate();
  const location = useLocation();



  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const currentPath = location.pathname;
    
    if(currentPath.startsWith("/customer")){
      const res = await axios.post(
        "http://localhost:4000/customer/otp-verifyEmail",
        {
          otp: otp,
        },
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200 && res.data.message) {
        navigate("/customerdelivery");
      } else if (
        res.status === 200 &&
        (res.data.existingCustomer || res.data.Errormessage)
      ) {
        navigate("/customerotp");
      }

  } 
  
  else if(currentPath.startsWith("/admin")){
    const res = await axios.post(
      "http://localhost:4000/restaurant/otp-verifyEmail",
      {
        otp: otp,
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
      navigate("/adminotp");
    }
  }
  }
  return (
    <FormPage
    onsubmit = {handleSubmit}
      formTitle="Verify your account"
      buttonText="Submit OTP"
      children={{
        formElement: (
          <>
            <div>
              <label>
                Enter OTP
                <input type="text" name="otp" value={otp} onChange={(e:ChangeEvent<HTMLInputElement>)=>setOtp(e.currentTarget.value)}/>
              </label>
            </div>
          </>
        ),
      }}
    ></FormPage>
  );
}
