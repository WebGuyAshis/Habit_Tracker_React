import { useEffect } from "react";
import './dashboard.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../SideNavbar";
import Habit from "./Habit";

export default function Dashboard() {
  let navigate = useNavigate()
  let user = useSelector((state)=>state.setUserData)
  
useEffect(() => {
  if(!user){
    console.log("User Doesnt Exist!");
    navigate('/')
  }
}, [])

// Calculating Date
function getFormattedDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  const ordinalIndicator = getOrdinalIndicator(day);

  return `${day}${ordinalIndicator} ${month}, ${year}`;
}

function getOrdinalIndicator(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const today = new Date();
const formattedDate = getFormattedDate(today);

console.log(formattedDate);

  return (
    <div className="dashboard-container">
      {/* Side Bar */}

      <SideNavbar/>

      <div className="display-habits">
      <h1 className="greeting-user">Welcome {user ? user.name : "Fetching..."}!</h1>
      <h3 className="todays-date">{formattedDate}</h3>

      <div className="habit-list">
        <Habit/>
        <Habit/>
        <Habit/>

      </div>
      </div>
    </div>
  );
}
