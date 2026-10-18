import {useState} from "react";

const User=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    
    return <div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count2 :{count2}</h1>
        <h2>
            {props.name}
        </h2>
        <h3>Location : Patna</h3>
        <h3>
            Contact: rdev84957@gmail.com
        </h3>
    </div>
    
}
export default User;