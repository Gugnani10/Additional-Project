import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Login=()=>{
    const Navigate=useNavigate();
    const [credentials,setCredentials]=useState({name:"",email:"",password:""});
    const context=useContext(userContext);
    const {addUser} = context;

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        addUser(credentials.name,credentials.email,credentials.password);
        // console.log(credentials);
        Navigate("/");
    }


    return(
        <div className="container w-25">
            
            <h2>Kindly Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name </label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={(e)=>{
                        setCredentials({...credentials,name:e.target.value})
                    }} value={credentials.name} />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={(e)=>{
                        setCredentials({...credentials,email:e.target.value})
                    }} value={credentials.email} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={(e)=>{
                        setCredentials({...credentials,password:e.target.value})
                    }}  value={credentials.password}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Login;