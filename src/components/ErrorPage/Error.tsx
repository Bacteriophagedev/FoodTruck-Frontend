import { Link } from "react-router-dom";
import "./Error.css";

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-logo">
          <Link to="/">
            <img
              className="errlogo"
              alt="Truck"
              src="../images/Logo.png"
            />
          </Link>
        </div>
        <div className="error-img">
            <img
                className="errlogo"
                src="../images/404 Page.jpeg"
                alt="error" />
        </div>
        <div className="error-text">
            <p>Click on the Icon above to go back to the Home page</p></div>
        </div>
    );
};

        
  

