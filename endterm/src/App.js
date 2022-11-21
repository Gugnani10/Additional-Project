import {React } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Admin from "./components/Admin"
import UserState from "./context/userState";
import './App.css'

function App() {
  return (
    <div className="bground" >
        <UserState>
            <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/login" element={<Login />} />
            </Routes>
            </Router>
        </UserState>
      
    </div>
  );
}

export default App;
