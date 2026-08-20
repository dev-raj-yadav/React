import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEVqSZRsb-Z3mo1DQvVZvB_EkRbWH_s5fKgty94VKmg&s=10"
        />
      </div>
      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  
  const { name, cuisines, rating, costForTwo, deliveryTime,image } = props?.resData ;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = [
  {
    id: "res001",
    name: "KFC",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Chicken"],
    location: "Koramangala",
    city: "Bangalore",
    description: "Delicious fried chicken, burgers and fast food.",
  },

  {
    id: "res002",
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    costForTwo: "₹350 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    location: "Indiranagar",
    city: "Bangalore",
    description: "Freshly baked pizzas with delicious toppings.",
  },

  {
    id: "res003",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.2,
    deliveryTime: "20-25 mins",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "American", "Fast Food"],
    location: "HSR Layout",
    city: "Bangalore",
    description: "Flame-grilled burgers and crispy sides.",
  },

  {
    id: "res004",
    name: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Beverages"],
    location: "BTM Layout",
    city: "Bangalore",
    description: "Hot and fresh pizzas delivered to your doorstep.",
  },

  {
    id: "res005",
    name: "Subway",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    rating: 4.1,
    deliveryTime: "20-25 mins",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Sandwiches", "Salads"],
    location: "Marathahalli",
    city: "Bangalore",
    description: "Fresh sandwiches, salads and healthy meals.",
  },

  {
    id: "res006",
    name: "McDonald's",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 4.3,
    deliveryTime: "20-25 mins",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "Fast Food", "Beverages"],
    location: "Whitefield",
    city: "Bangalore",
    description: "Burgers, fries, beverages and more.",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard  key={restaurant.id} resData={restaurant} />
        ))}   
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
