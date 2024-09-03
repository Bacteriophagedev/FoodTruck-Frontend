import "./menupage.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import UserDashboardTopBar from "../../components/Navbar/UserDashboardTopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ClipLoader } from "react-spinners";
interface Menu {
  nameofDish: string;
  description: string;
  id: string;
}

const categories = [
  { image: "pizza.png", categoryName: "Pizza", categoryImage: "pizza.png" },
  {
    image: "category-image-1.png",
    categoryName: "Rice",
    categoryImage: "Rice.png",
  },
  {
    image: "chicken.png",
    categoryName: "Chicken",
    categoryImage: "Chicken.png",
  },
  {
    image: "grilledmeat.png",
    categoryName: "Grilled Meat",
    categoryImage: "Grilled Meat.png",
  },
  {
    image: "burgernfries.png",
    categoryName: "Burger&Fries",
    categoryImage: "Burger&Fries.png",
  },
  { image: "burger.png", categoryName: "Burger", categoryImage: "Burger.png" },
  { image: "pasta.png", categoryName: "Pasta", categoryImage: "Pasta.png" },
  {
    image: "cocktails.png",
    categoryName: "cocktails",
    categoryImage: "cocktails.png",
  },
];

const MenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuImages, setMenuImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/restaurant/menus"
        );
        setMenus(response.data.latestMenus);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest menus:", error);
        setLoading(false);
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

    fetchMenus();
    fetchMenuImages();
  }, []);

  const handleOnClick = (id: string) => {
    navigate(`/menudetailspage/${id}`);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  const categoriesList = categories.map((category, index) => (
    <div key={index} className="category-item">
      <img src={`../images/${category.image}`} alt={category.categoryName} />
      <p>{category.categoryName}</p>
    </div>
  ));

  return (
    <>
      <Sidebar />
      <UserDashboardTopBar />
      <div className="menupage-container">
        <div className="category-area">
          <div>
            <div className="heading-section">
              <h2 className="category-heading">Category</h2>
              <img
                src="../images/filter.png"
                alt="filter icon"
                className="filter-icon"
              />
            </div>
            <div className="category-list">{categoriesList}</div>
          </div>

          <div className="category-item-area">
            <h2 className="category-item-heading">All menu</h2>
            <div className="sec-col menu-page">
              {menus.map((menu, index) => (
                <ItemCard
                  key={index}
                  image={
                    menuImages[index]
                      ? `data:image/png;base64,${menuImages[index]}`
                      : "fallback-image-path.png"
                  }
                  title={menu.nameofDish}
                  description={menu.description}
                  onclick={() => handleOnClick(menu.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
