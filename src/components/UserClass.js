import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            userInfo:{
                name:"Dummy",
                location:"India",
                avatar_url:"http:dummy",
                bio:"Dummy bio"
            }
        };
        console.log("Child Constructor")   
    }
    async componentDidMount(){
    // console.log(this.props.name+"Child Did  Mounted")
        const data=await fetch("https://api.github.com/users/dev-raj-yadav");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json
           
        })
         console.log("Compnet did mount")
   }
   componentDidUpdate(){
    console.log("Comoponent did update")
   } 
   componentWillUnmount(){
    console.log("Component will unmount")
   }
    render(){
       const {name,avatar_url,bio,location}=this.state.userInfo;
       
       console.log(this.props.name+"Child render")
                return (
                    
            <div className="user-card">
                <img src={avatar_url}/>
               <h2>{name}</h2>
               <h3>{location}</h3>
               <p>{bio}</p> 
            </div>
        )
    }
}

export default UserClass;