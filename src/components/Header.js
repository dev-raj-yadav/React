import {LOGO_URL} from "../utils/constant"
import {useState} from "react";
import {Link} from "react-router-dom";
 const Header = () => {
  console.log("Header Rednered")
const [btnName,setBtnName]=useState(["Login"]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul className="items">
              
          <li> <Link to="/"> Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> 
           <Link to="/contact">Contact us</Link>
            </li>
          <li >Cart</li>
         <button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;