import "./secondFooter.css";

export const SecondFooter = () => {
  return (
    <div className="SecondFooter-layout">
      <div className="text-field">
        <img
          className="rectangle"
          src="../images/Logo.png"
          alt="Foodtruck Logo"
        />

        <p className="text-field-text">
          <span>
          Savor the convenience. Delight in the flavor. Experience the difference with FoodTruck. Bringing culinary excellence to your doorstep, one order at a time. Whether it's a classic comfort or a daring delight, we've got you covered. Dive into a realm of flavors and let your taste buds rejoice </span>
        </p>
      </div>

      <div className="secondFooter-contact">
        <div className="contact">
          <img
            className="rectangle-pic"
            src="../images/call.svg"
            alt="call button icon"
          />

          <p className="text-field-text">
            <span>
            Tel 
            </span>
            <br />
            <span className="text-field-text-span">Call FoodTruck</span>
          </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/mail.svg"
          alt="mail button icon"
        />

        <p className="text-field-text">
          <span>
          Mail 
          </span>
          <br />
          <span className="text-field-text-span">infos.foodtruck@gmail.com</span>
        </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/location.svg"
          alt="location button icon"
        />

        <p className="text-field-text">
          <span>
          Address 
          </span>
          <br />
          <span className="text-field-text-span">23 Orchid Road. Lekki, Lagos</span>
        </p>
        </div>
        <div className="contact">
        <img
          className="rectangle"
          src="../images/fax.svg"
          alt="fax button icon"
        />

        <p className="text-field-text">
          <span>
          Fax 
          </span>
          <br />
          <span className="text-field-text-span">+1-000-0000</span>
        </p>
        </div>
        
      </div>
    </div>
  );
};
