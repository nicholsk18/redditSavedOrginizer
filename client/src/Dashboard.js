import React, { useState } from "react";
import Card from "./components/Card";

const Dashboard = () => {
  const [redditAuth, setRedditAuth] = useState({ code: "", state: "" });
  const isAuth = window.sessionStorage.getItem("redditAuth");

  console.log(isAuth.code);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
