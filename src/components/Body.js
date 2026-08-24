import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
const Body = () => {
  console.log("Rerdered")
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  console.log(listOfRestaurant)
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
    const swiggyUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.329979728879792&lng=78.04410997778177&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

    // Wrap with corsproxy.io
    const data = await fetch(
      "https://corsproxy.io/?url=" + encodeURIComponent(swiggyUrl),
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards
        ?.slice(3)
        ?.filter((card) => card?.card?.card?.info)
        ?.map((card) => ({
          info: card.card.card.info,
        })),
    );
  };

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
        <button className="search-btn" onClick={()=>{console.log(searchText) 
          const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText)); setListOfRestaurant(filteredRestaurant)}}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
