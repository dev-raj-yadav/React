
const RestaurantCard = (props) => {
  
  const { name, cuisines, rating, costForTwo, deliveryTime,image } = props?.resData ;

  return (
    <div className="res-card" >
      <img className="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;