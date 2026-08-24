import { COULD_URL } from "../utils/constant.js";

const RestaurantCard = (props) => {
  
  const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId, } = props?.resData ;

  return (
    <div className="res-card" >
      <img className="res-logo" src={COULD_URL+ cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;