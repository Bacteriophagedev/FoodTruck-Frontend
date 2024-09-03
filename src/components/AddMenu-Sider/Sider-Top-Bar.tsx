import './Sider-Top-Bar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SiderTopBar = () => {
  const [userName, setUserName] = useState(""); 

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/protected-routes/restaurant", {
          withCredentials: true,
        });
  
        if (response.status === 200 && response.data.restaurant) {
          setUserName(response.data.restaurant.nameofRestaurant); // Assuming the restaurant's name is available
        }
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };
  
    fetchUserDetails();
  }, []); // Empty dependency array ensures this effect runs only once on mount


    return (
        <>
<div className="restaurant-navbar">
        <div className="notifify">
          <img src="images/Icon.png" alt="notification bell" />
          <span className="restaurant-notification-count"></span>
          <div className="restaurant-profile-container">
            <img src="images/profiledummy.png" alt="user profile" className="user-profile" />
            <span className="user-name">{userName}</span>
          </div>
        </div>
      </div>
      </>
    )
}

export default SiderTopBar