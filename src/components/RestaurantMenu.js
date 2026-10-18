import {useEffect,useState} from "react";
import Shimmer from "./Shimmer"
import menuData from "../utils/menu.js"
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
const RestaurantMenu=()=>{

   const [resInfo,setResInfo]=useState(null );
    useEffect(()=>{
        //fetchMenu()
    },[])

return    (
        <div className="menu">
            <h1>Name of The Restaurant</h1>

            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Pepsi</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;