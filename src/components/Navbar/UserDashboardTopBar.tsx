import './UserDashboardTopBar.css'; 
import { useEffect, useState } from 'react'
import axios from 'axios';

const UserDashboardTopBar = () => {

  const [userName, setUserName] = useState(""); 

  useEffect(() => {
    // Fetch user details when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/protected-routes/customer", {
          withCredentials: true,
        });
  
        if (response.status === 200 && response.data.customer) {
          setUserName(response.data.customer.FirstName + " " + response.data.customer.LastName); // Assuming the customer's name is available
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    fetchUserDetails();
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div className="user-navbar">
      <div className="search-container">
        <img src="/images/search.png" alt="search icon" className="search-icon" />
        <input type="text" placeholder="Search for Restaurants, dishes" />
      </div>
      <div className="notifify">
        <img src="/images/Icon.png" alt="notification bell" />
        <span className="notification-count"></span>
        <div className="user-profile-container">
          <img src="/images/profiledummy.png" alt="user profile" className="user-profile" />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardTopBar;
