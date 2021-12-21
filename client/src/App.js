import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [redditCode, setRedditCode] = useState("")
  const [redditState, setRedditState] = useState("")

  useEffect(() => {
    console.log(window.sessionStorage.getItem("redditCode"))
    console.log(window.sessionStorage.getItem("redditState"))
  })

  return true ? (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  ) : (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=uNKMxYX6AkglZi36qk3ZFQ&response_type=code&state=abc&redirect_uri=http://localhost:3001/&duration=temporary&scope=*">
      Test
    </a>
  );
};

export default App;
