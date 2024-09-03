import "./navbarlanding.css";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "../hamburgermenu/Hamburger";

export const LandingNavbar = () => {
  return (
    <div className="landing-navbar">
      <div className="landing-left">
        <div className="landing-logo">
          <Link to="/">
            <img className="truck" alt="Truck" src="../images/Logo.png" />
          </Link>
          {/* <div className="landing-frame">
            <p className="food-truck">
              <span className="text-food"> Food </span>
              <span className="text-truck"> Truck </span>
            </p>
          </div> */}
        </div>

        <HamburgerMenu />
        <div className="nav-list">
        
          <div className="home-list">
            <Link to="/">Home</Link>
          </div>

          <div className="other-list">
            <Link to="/">About us</Link>
          </div>

          <div className="other-list">
            <Link to="/">Services</Link>
          </div>
        </div>
      </div>

      <div className="right">
        
        <div className="login">
        <Link to="/customerlogin">Log In</Link>
          {/* <div className="sub-login">
            
          </div> */}
        </div>
        <div className="signup">
          <div className="sub-signup">
            <Link to="/customersignup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
