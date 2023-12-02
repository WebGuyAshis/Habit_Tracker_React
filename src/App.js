import { useDispatch } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { activeUser } from "./actions";

function App() {
  console.log("I will ALways Run");
  let dispatch = useDispatch();
  // Check User Data from Local Host
  let user = JSON.parse(localStorage.getItem("user"));

  useState(() => {
    if (user) {
      dispatch(activeUser(user));
      console.log(`Redirect ${user.name} to Dashboard!`);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
