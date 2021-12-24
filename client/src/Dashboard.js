import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./components/Card";

const Dashboard = () => {
  const navigate = useNavigate();
  const [redditAuth, setRedditAuth] = useState({ code: "", state: "" });
  const isAuth = window.sessionStorage.getItem("redditAuth");

  if (isAuth) {
    const { code, state } = JSON.parse(isAuth);
    useEffect(() => {
      const data = {
        code,
        state,
      };
      fetch("http://localhost:3001/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  } else {
    navigate("/", { replace: true });
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
