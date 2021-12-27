import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./components/Card";
import { getRedditData } from "./helpers/dataHelper";

const Dashboard = () => {
  const [token, setToken] = useState(
    window.sessionStorage.getItem("redditToken")
  );

  const [data, setData] = useState(null);

  useEffect(async () => {
    const mySession = JSON.parse(token);
    if (!data) {
      const redditData = await getRedditData(mySession.token);
      console.log(redditData);
      setData(redditData);
    }
  });

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((ele, index) => (
          <div key={index}>
            <Card
              title={ele.data.title ? ele.data.title : ele.data.link_title}
              subreddit={ele.data.subreddit}
              link={ele.data.url ? ele.data.url : ele.data.link_permalink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
