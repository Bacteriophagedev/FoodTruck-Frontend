import "./formPage.css";
import OrangeButton from "../OrangeButton/OrangeButton";
import GoogleSignInBtn from "../google-sign-in/GoogleSignInBtn";
import { ReactNode } from "react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface FormElement {
  formTitle: string;
  buttonText: string;
  children: {
    formElement: ReactNode;
  };
  onsubmit: (e: FormEvent) => void;
}

function FormPage({ formTitle, buttonText, children, onsubmit }: FormElement) {
  const { formElement } = children;
  const currentPath = useLocation().pathname;
  return (
    <div className="formpage-container">
      <div className="formpage-container_left">
        
          <img
            src="../images/bg-forms.png"
            alt="background picture of food variety "
          />
        
      </div>
      <div className="formpage-container_right">
        <div className="form-container">
         
          <div className="logo-container">
            <img src="../images/Logo.png" />
           
            <h3>{formTitle}</h3>

            {buttonText === "Send reset instructions" && (
              <p>
                Enter your email below and we'll send you instructions on how to
                reset your password
              </p>
            )}
          </div>
          <form onSubmit={onsubmit}>
            {formElement}

            {formTitle === "Welcome back to Food Truck" && (
              <Link
                to={
                  currentPath.startsWith("/admin")
                    ? `/adminresetpage`
                    : `/customerresetpage`
                }
              >
                <p className="reset-link">Forgot Password</p>
              </Link>
            )}

            {(formTitle === "Create an Account" ||
              formTitle === "Welcome back to Food Truck") && (
              <>
                <div className="divider">
                  <div className="line"></div>
                  <p>OR</p>
                  <div className="line"></div>
                </div>
                {/* <a href="http://localhost:4000/auth/google">
                  {" "}
                  <GoogleSignInBtn />
                </a> */}
              </>
            )}

            <OrangeButton buttonText={buttonText} onClick={undefined} />

            {buttonText === "SIGNUP" && (
              <Link to="">
                <p className="alternate-link">
                  Already have an account? <span>Log in here</span>
                </p>
              </Link>
            )}
            {buttonText === "LOG IN" && (
              <Link to={currentPath.startsWith("/admin")
              ? `/adminsignup`
              : `/customersignup`}>
                <p className="alternate-link">
                  Don't have an account? <span>Sign up here</span>
                </p>
              </Link>
            )}

            {buttonText === "Reset Password" && (
              <Link to="">
                <p className="alternate-link">
                  Go back to{" "}
                  <span style={{ textDecoration: "underline" }}>Sign in</span>
                </p>
              </Link>
            )}
            {buttonText === "Submit OTP" && (
              <Link to="">
                <p className="alternate-link">
                  Didn't get OTP ?
                  <span style={{ textDecoration: "underline" }}>
                    Click here to resend
                  </span>
                </p>
              </Link>
            )}
          </form>
          <a href="http://localhost:4000/auth/google">
            {" "}
            <GoogleSignInBtn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
