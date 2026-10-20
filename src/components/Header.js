import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  console.log("Header Rednered");
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState(["Login"]);
  return (
    <div className=" flex items-center justify-between bg-pink-100 shadow-lg mb-2 w-full  min-h-20 sm:bg-yellow-50 ">
      <div className="w-1/3 ">
        <img className="p-2 w-20" src={LOGO_URL} />
      </div>
      <div className="w-2/3 ">
        <ul className="flex  items-center justify-around"> 
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
