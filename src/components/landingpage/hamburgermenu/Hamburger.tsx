import { Link } from "react-router-dom";
import "./hamburger.css";

export const HamburgerMenu = () => {
  return (
    <>
      <input id="toggle" type="checkbox" />
      <label htmlFor="toggle" className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </label>

        <div className="nav">
            <div className="nav-wrapper">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/customerlogin">Log In</Link></li>
                <li><Link to="/customersignup">Sign Up</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Services</Link></li>
                </ul>
            </div>
        </div>
    </>
  );
};

