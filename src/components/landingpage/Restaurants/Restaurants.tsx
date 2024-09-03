import "./restaurants.css";

export const Restaurants = () => {
  return (
    <div className="restaurants-frame">
      <h3 className="restaurants-h3">Our Restaurants</h3>

      <div className="restaurants-container">
        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/Premium Chicken.png"
          />
          <button className="btn1">Premium Chicken</button>
        </div>

        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/Pizza&hungry.svg"
          />
          <button className="btn1">Pizza&hungry</button>
        </div>

        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/Dodo Pizza.svg"
          />
          <button className="btn1">Dodo Pizza</button>
        </div>

        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/Chicken Farm.svg"
          />
          
          <button className="btn1">Chicken Farm</button>
        </div>

        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/Krispy Kreme.svg"
          />
          
          <button className="btn1">Krispy Kreme</button>
        </div>

        <div className="restaurant-div">
          <img
            className="restaurant-div-img"
            alt="Service"
            src="../images/LLL Burgers.svg"
          />
         
          <button className="btn1">LLL Burgers</button>
        </div>

      </div>


    </div>
  );
};
