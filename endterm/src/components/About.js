import React ,{ useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const About= ()=>{
    const Navigate=useNavigate();
    const context=useContext(userContext);
    const {user} = context;
    useEffect(()=>{
        if(user.email=== ' '){
            Navigate("/login");

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(

        


        <div className="container w-50">
            <h1>About page</h1>
            <h5>
                We have build a Review sevices App.
            </h5>
            
        </div>
        
    )
}

export default About;