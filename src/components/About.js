import User from "./User"; 
import UserClass from "./UserClass"
import {Component} from "react";
class About extends Component{
   constructor(props){
    super(props);

   // console.log("Parent Constructor")
   }
   componentDidMount(){
   //  console.log("Parent Mounted")
   
   }
    render(){

      //  console.log("Parent render")
        return <div className="About">
            <h1>About</h1>
            <h2>This is Namaste React web series</h2>
            <UserClass />
            
            
        </div>
    }
}

export default About;