import {useEffect,useState} from "react";
import Shimmer from "./Shimmer"
import menuData from "../utils/menu.js"
const RestaurantMenu=()=>{

   const [resInfo,setResInfo]=useState(null );
    useEffect(()=>{
        //fetchMenu()
    },[])

// const fetchMenu = async () => {
//  const URL =
//   "https://corsproxy.io/?" +
//   encodeURIComponent(
//     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.329979728879792&lng=78.04410997778177&restaurantId=1193793&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
//   );
//   const data=await fetch(URL)
//   const json=await data.json();
//   console.log(json)
//   setResInfo(json.data);
// }
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