import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { activeUser } from "./actions";

function App() {
  let dispatch = useDispatch();
  // Check User Data from Local Host
  let userData = JSON.parse(localStorage.getItem("user"));

  useState(() => {
    if (userData) {
      dispatch(activeUser(userData));
    }
  }, []);

  const user = useSelector((state)=>state.setUserData) 
// Whenever User Gets Updated then update it to Local storage As well
  useEffect(()=>{
    if(user){
      localStorage.setItem('user', JSON.stringify(user))
      console.log("Setting User to Local Storage!");
    }
  }, [user])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
