import React from "react";

export default function Dashboard() {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">
      <h1>Welcome {user ? user.name : "Fetching...!"}</h1>
    </div>
  );
}
