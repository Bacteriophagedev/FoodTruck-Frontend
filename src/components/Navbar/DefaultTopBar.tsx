import './DefaultTopBar.css'; 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'></div>
      <ul className='list'>
        <li><span className='home'>Home</span></li>
        <li>About Us</li>
        <li>Services</li>
      </ul>
      <div className='btn'>
        <button type='submit' className ='button1'>Log In</button>
        <button className='button2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;