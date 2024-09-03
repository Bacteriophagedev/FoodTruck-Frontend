import "./products.css";
import ItemCard from "../../ItemCard/ItemCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Menu {
  nameofDish: string;
  description: string;
  id: string;
}

export const Products = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuImages, setMenuImages] = useState<string[]>([]);
  const [logoData, setLogoData] = useState<any[]>([]); // Added state for logo data

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/restaurant/menus"
        );
        setMenus(response.data.latestMenus);
      } catch (error) {
        console.error("Error fetching latest menus:", error);
      }
    };

    const fetchMenuImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/restaurant/menusImages"
        );
        setMenuImages(response.data.imageDataArray);
      } catch (error) {
        console.error("Error fetching latest menu images:", error);
      }
    };

    const fetchLogoData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/restaurant/getAllLogos"
        );
        setLogoData(response.data);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchMenus();
    fetchMenuImages();
    fetchLogoData(); // Call the function if logos are needed
  }, []);

  const handleOnClick = (id: string) => {
    navigate(`/menudetailspage/${id}`);
  };

  return (
    <div className="product-frame">
      {menus.map((menu, index) => (
        <ItemCard
          key={index}
          image={`data:image/png;base64,${menuImages[index]}`}
          title={menu.nameofDish}
          description={menu.description}
          onclick={() => handleOnClick(menu.id)}
        />
      ))}

      {/* Optional: Display logos */}
      <div className="logo-frame">
        {logoData.map((logo, index) => (
          <img
            key={index}
            src={`data:image/png;base64,${logo}`}
            alt="Restaurant Logo"
          />
        ))}
      </div>
    </div>
  );
};
