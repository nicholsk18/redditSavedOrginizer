import React, { useState } from "react";

const Dashboard = () => {
  const [redditAuth, setRedditAuth] = useState({ code: "", state: "" });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
