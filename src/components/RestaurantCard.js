import { COULD_URL } from "../utils/constant.js";

const RestaurantCard = (props) => {
  
  const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId, } = props?.resData ;

  return (
    <div className=" hover:bg-red-200 m-2 h-auto border w-1/5 border-black border-solid bg-red-100 flex flex-col items-center rounded-lg" >
      <img className= "h-48 object-cover  w-4/5 rounded-xl" src={COULD_URL+ cloudinaryImageId} />
      <h3 className="font-bold text-lg ">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;