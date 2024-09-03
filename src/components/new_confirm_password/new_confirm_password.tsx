import "./new_confirm_password.css";

const ChangePassword = () => {
  return (
    <div className="container">
      <div className="leftcolumn">
        <img
          className="rectangle"
          src="../images/bg-forms.png"
          alt="background-image"
        />
      </div>
      <div className="rightcolumn">
        <img className="frame" src="../images/Logo.png" alt="logo" />
        <h3> Change Password</h3>

        <div className="first">
          <label htmlFor="password">Enter New Password</label>
          <input type="password" name="password" required />
        </div>

        <div className="second">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" required />
        </div>

        <button className="btn">Change Password</button>
      </div>
    </div>
  );
};

export default ChangePassword;
