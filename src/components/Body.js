import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData.js"
import {useState} from "react";

const Body = () => {
  
 let [listOfRestaurant,setListOfRestaurant]=useState(resObj)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
           const  filteredList=listOfRestaurant.filter(res=>res.rating>4);
             console.log(filteredList);
             setListOfRestaurant(filteredList);
        }}>Top Rated Restaurants</button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard  key={restaurant.id} resData={restaurant} />
        ))}   
      </div>
    </div>
  );
};

export default Body;