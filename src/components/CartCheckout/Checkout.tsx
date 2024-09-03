import { useState } from "react";
import "../CartCheckout/Checkout.css";
import { Link } from "react-router-dom";

const Checkout: React.FC = () => {
  const [count1, setCount1] = useState(0);

  const itemPrice = 5000; // Price of the item
  const deliveryFee = 6500;
  const discount = 0; // Discount amount

  const total1 = itemPrice * count1 + deliveryFee - discount; // Total amount for item 1
  const subtotal1 = itemPrice * count1; // Subtotal excluding delivery fee and discount for item 1


  const increment1 = () => {
    setCount1((c) => c + 1);
  };

  const decrement1 = () => {
    setCount1((c) => c - 1);
  };



  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setCount1(Number(value));
    }
  };


  return (
    <div className="body">
      <div className="first-col">
        <img className="user-img" src="/images/user.png" alt="user image" />
        <div>
          <h2>Chinyere Enwonu</h2>
          <p>0919386386</p>
          <p>33 Adebimpe Okanlowon Close, Lekki Phase II, Lagos, Nigeria</p>
        </div>
      </div>

      <div className="second-column">
        <div className="sec-sub-column">
          <img className="pic" src="/images/food2.svg" alt="" />
          <div className="marinated">
            <p>Marinated Chicken</p>
            <p>{itemPrice}</p>
          </div>

          <div className="button-area">
            <button onClick={decrement1}>-</button>
            <input type="text" value={count1} onChange={handleInputChange1} />
            <button onClick={increment1}>+</button>
          </div>
        </div>
      </div>

      <div className="last-column">
        <div>
          <div className="last-col1">
            <span>SubTotal</span>
            <span>{subtotal1}</span>
          </div>
          <div className="last-col1">
            <span>Delivery Fee</span>
            <span>{deliveryFee}</span>
          </div>
          <div className="last-col1">
            <span>Discount</span>
            <span>{discount}</span>
          </div>
        </div>

        <div className="last-col2">
          <p>Total</p>
          <p>{total1}</p>
        </div>
      </div>

      <div className="last">
        <Link to="/paymentoptionpage">
          <button className="lastbtn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
