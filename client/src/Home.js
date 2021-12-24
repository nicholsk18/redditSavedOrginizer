import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const isAuth = window.sessionStorage.getItem("redditAuth");

    if (isAuth) {
      navigate("/dashboard", { replace: true });
    } else {
      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (code && state) {
        window.sessionStorage.setItem(
          "redditAuth",
          JSON.stringify({ code, state })
        );
        navigate("/dashboard", { replace: true });
      }
    }
  });

  return (
    <div className="container mx-auto p-4 center">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="https://www.reddit.com/api/v1/authorize?client_id=uNKMxYX6AkglZi36qk3ZFQ&response_type=code&state=abc&redirect_uri=http://localhost:3001/&duration=temporary&scope=*"
      >
        Auth With Reddit
      </a>
    </div>
  );
};

export default Home;
