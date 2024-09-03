import UserDashboardTopBar from "../components/Navbar/UserDashboardTopBar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MenuDetailsPage.css";
import OrangeButton from "../components/OrangeButton/OrangeButton";

function MenuDetailsPage() {
  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  const handleOrderNow = () => {
    console.log("Order placed");
  };

  return (
    <section className="menu-details-container">
      <Sidebar />
      <section className="menu-details-area">
        <UserDashboardTopBar />

        <div className="food-display-section">
          <img
            src="../images/menu-details-food-1.png"
            alt="Peppered lap with Grilled Fish 1"
          />
          <img
            src="../images/menu-details-food-2.png"
            alt="Peppered lap with Grilled Fish 2"
          />
          <img
            src="../images/menu-details-food-3.png"
            alt="Peppered lap with Grilled Fish 3"
          />
        </div>

        <div className="food-details">
          <p className="food-name">Peppered lap with Grilled Fish</p>
          <p className="food-price">
            <span className="currency-symbol">₦</span>
            5,000
          </p>
          <p className="food-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            impedit obcaecati iste inventore unde neque odio ipsum earum eum
            harum.
          </p>
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
          <OrangeButton buttonText="Add to Cart" onClick={handleAddToCart} />
          <OrangeButton buttonText="Order Now" onClick={handleOrderNow} />
        </div>
      </section>
    </section>
  );
}

export default MenuDetailsPage;
