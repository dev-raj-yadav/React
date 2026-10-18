import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import useOnlineStatus  from "../utils/useOnlineStatus";
const Body = () => {
  
  //state variable super variable
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  console.log(listOfRestaurant)
  const [filteredRestaurant,setFilteredRestraunt]=useState(listOfRestaurant)
  useEffect(() => {
    fetchData();
  }, []);
  const [searchText, setSearchText] = useState("");
  
  //  const fetchData=async ()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING");
  //    const json=await data.json();
  //    console.log(json) 
  //  }
  const fetchData = async () => {
  const targetUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.329979728879792&lng=78.04410997778177&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

  // const swiggyUrl =
  //   `https://corsproxy.io/?url=${encodeURIComponent(targetUrl)}`;

  const data = await fetch(targetUrl);
  const json = await data.json();

  console.log(json);

  setListOfRestaurant(
    json?.data?.cards
      ?.filter((card) => card?.card?.card?.info)
      ?.map((card) => ({
        info: card.card.card.info,
      }))
  );
  setFilteredRestraunt(  json?.data?.cards
      ?.filter((card) => card?.card?.card?.info)
      ?.map((card) => ({
        info: card.card.card.info,
      })))
}; 
const onlineStatus=useOnlineStatus();
if(onlineStatus=== false) return <h1>Looks like you are offline please check you interent connection</h1>
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search" >
          
          <input 
            placeholder="Search"
            type="text"
            className="search-box"
            value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />{" "}
        </div>
        <button className="search-btn" onClick={()=>{console.log(searchText)  //Filter the  restruant cards and update the UI

          const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText));  setFilteredRestraunt(filteredRestaurant)}}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            ); 
            console.log(filteredList);
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
