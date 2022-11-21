import {React, useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Home= ()=>{
    const Navigate=useNavigate();
    const context=useContext(userContext);
    const {user}=context;


    useEffect(()=>{
        
        if(user.email=== ' '){
            Navigate("/login");

        }
        else if(user.email === "admin@gmail.com" && user.password==="admin admin"){
            Navigate("/Admin");
            console.log("here comes the admin");
        }
        else{
            console.log("kffect called");
            // console.log(user);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(

        <div className="container">
        <h1>welcome -{user.name || "random person"}- </h1>
        <h5>
            Hiiiiiiiiiii
        </h5>
        </div>
        
    )
}

export default Home;