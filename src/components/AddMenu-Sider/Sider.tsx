import { Link, useNavigate } from 'react-router-dom';
import './Sider.css';
import axios from 'axios';

const Sider = () => {
    const navigate = useNavigate();
  
  
    function handleClick() {
  
          axios.get("http://localhost:4000/customer/logout", {
          withCredentials: true,
        })
        .then((response) => {
          if(response.status === 200 && response.data.successMessage){
            navigate("/")
          }
          
        })
        .catch((error) => {
          console.error('Logout error:', error);
        });
  
      
   
    }

    return (
        <>
            <aside>
                <Link to="/">
                    {" "}
                <div className="logo"></div>
                </Link>
                <div className="Sidercont">
                    <Link to="/orderconfirmation" className="sider-item">
                        <img src="images/check_circle_outline.png" alt="Home Icon" />
                        <span className="home">Order Confirmation</span>
                    </Link>
                    <Link to="/addmenu" className="sider-item">
                        <img src="images/circle-plus.png" alt="Home Icon" />
                        <span className="home">Add Menu</span>
                    </Link>
                    <a href="#" className="sider-item">
                        <img src="images/cog.png" alt="Home Icon" />
                        <span className="home">Settings</span>
                    </a>
                    <Link to="" className="sider-item">
                        <img src="images/logout.png" alt="Home Icon" />
                        <span className="home" onClick={handleClick}>Logout</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}

export default Sider;

