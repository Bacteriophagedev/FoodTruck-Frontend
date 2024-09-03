import UserDashboardTopBar from "../../components/Navbar/UserDashboardTopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MenuDetailsPage.css";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Menu {
  nameofDish: string;
  description: string;
  id: string;
  priceofDish: string;
}

function MenuDetailsPage() {
  const { id } = useParams();
  const [userEmail, setUserEmail] = useState("");
  const [menus, setMenus] = useState<Menu | null>(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/protected-routes/customer",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200 && response.data.customer) {
          setUserEmail(response.data.customer.email);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/restaurant/menu/${id}`
        );
        if (response.status === 200 && response.data.latestMenus) {
          setMenus(response.data.latestMenus);
        }
      } catch (error) {
        console.error("Error fetching latest menus:", error);
      }
    };

    fetchMenus();
  }, [id]);

  const handleOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/customer/acceptpayment",
        {
          email: userEmail,
          amount: menus?.priceofDish,
        }
      );

      if (response.data.data && response.data.data.authorization_url) {
        window.open(response.data.data.authorization_url, "_blank");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <section className="menu-details-area">
        <UserDashboardTopBar />
      </section>
      {menus ? (
        <div className="menu-details-container">
          <div className="food-display-section">
            <img src="../images/menu-details-food-1.png" alt="Dish 1" />
            <img src="../images/menu-details-food-2.png" alt="Dish 2" />
            <img src="../images/menu-details-food-3.png" alt="Dish 3" />
            <div className="food-details">
              <p className="food-name">{menus.nameofDish}</p>
              <p className="food-price">
                <span style={{ fontWeight: "normal", color: "#828282" }}>
                  ₦&nbsp;
                </span>
                {menus.priceofDish}
              </p>
              <p className="food-description">{menus.description}</p>
            </div>
            <div className="extras-section">
              <p className="extras-section-heading">
                Would you like to add a drink?
              </p>
              <div className="drinks-section">
                <div>
                  <img src="../images/drink-1.png" alt="Drink 1" />
                </div>
                <div>
                  <img src="../images/drink-2.png" alt="Drink 2" />
                </div>
                <div>
                  <img src="../images/drink-3.png" alt="Drink 3" />
                </div>
                <div>
                  <img src="../images/drink-4.png" alt="Drink 4" />
                </div>
              </div>
            </div>
            <div className="menu-btn-container">
              <OrangeButton buttonText="Add to Cart" onClick={() => {}} />
              <OrangeButton buttonText="Order Now" onClick={handleOrder} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading menu details...</p>
      )}
    </>
  );
}

export default MenuDetailsPage;
