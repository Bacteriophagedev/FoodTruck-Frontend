import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import UserDashboardTopBar from "../Navbar/UserDashboardTopBar";
import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Menu {
  nameofDish: string;
  description: string;
  id: string
}

function Dashboard() {
  const [logoData, setLogoData] = useState<string[]>([]);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuImages, setMenuImages] = useState<string[]>([]);

const navigate = useNavigate();
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('http://localhost:4000/restaurant/menus');
        setMenus(response.data.latestMenus);
      } catch (error) {
        console.error('Error fetching latest menus:', error);
      }
    };

    const fetchMenuImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/restaurant/menusImages');
        setMenuImages(response.data.imageDataArray);
      } catch (error) {
        console.error('Error fetching latest menu images:', error);
      }
    };

    const fetchLogoData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/restaurant/getAllLogos");
        setLogoData(response.data);
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchMenus();
    fetchMenuImages();
    fetchLogoData();
  }, []);

  const handleOnClick = (id: string) => {
    navigate(`/menudetailspage/${id}`);
  }

  return (
    <>
      <div className="userDashboard-component">
        <UserDashboardTopBar />
      </div>
      <div className="userDashboard-mainContainer">
        <Sidebar />
      </div>
      <div className="dashboard-container">
        <div className="dashboard-body">
          <h1 style={{ marginLeft: "3.5rem", marginTop:"5rem" }}>Top Restaurants</h1>
          <div className="first-col">
            <div className="sub-first">
              {logoData.map((logoBase64, index) => (
                <img key={index} src={`data:image/png;base64,${logoBase64}`} alt={`Logo ${index}`} />
              ))}
            </div>
          </div>

          <div style={{ marginLeft: "3.5rem" }}>
            <h1>New Offers</h1>
          </div>
          <div className="sec-col">
            {menus.map((menu, index) => (
              <ItemCard
                key={index}
                image={`data:image/png;base64,${menuImages[index]}`}
                title={menu.nameofDish}
                description={menu.description}
                onclick={() => handleOnClick(menu.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
