import "./firstFooter.css";

export const FirstFooter = () => {
  return (
    <div className="firstFooter-layout">
      <div className="newsletter">
        <p className="newsletter-text">
            <span className="nl-text-span">Newsletter</span>
            <br />
            <span>Be the first one to know  about discounts, offers and events</span>
        </p>
      </div>

      <div className="submitField">
        <input type="text" placeholder="Enter your email" className="emailInput" />
        <button className="submitBtn">Submit</button>

      </div>
    </div>
  );
};
