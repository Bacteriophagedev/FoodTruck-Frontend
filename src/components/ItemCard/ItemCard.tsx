import OrangeButton from '../OrangeButton/OrangeButton';
import "./ItemCard.css";


function ItemCard({ image, title, description, onclick}) {
  return (

      <div className="food-item-card">
        <img src={image} alt={title} /> {/* Use the image prop directly */}
        <div className="card-content">
        <h5>{title}</h5>
        <p>{description}</p>
        <OrangeButton buttonText="Add to Cart" onClick={onclick}/>
        </div>
      </div>

  );
}

export default ItemCard;
