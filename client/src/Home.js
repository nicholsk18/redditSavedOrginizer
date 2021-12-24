import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";

const Home = () => {
  const navigate = useNavigate();

  const [hasToken, setHasToken] = useState(
    window.sessionStorage.getItem("redditToken")
  );

  // if (!hasToken) {
  //   console.log(hasToken);
  //   navigate("/login", { replace: true });
  // }

  // useEffect(() => {
  //   if (isAuth && hasToken) {
  //     navigate("/dashboard", { replace: true });
  //   } else {
  //     const code = searchParams.get("code");
  //     const state = searchParams.get("state");

  //     if (code && state) {
  //       const expires = new Date(new Date().getTime() + 60000 * 60);

  //       window.sessionStorage.setItem(
  //         "redditAuth",
  //         JSON.stringify({
  //           expiresAt: expires,
  //           code,
  //           state,
  //         })
  //       );
  //       navigate("/dashboard", { replace: true });
  //     }
  //   }
  // });

  return !hasToken ? (
    <Login />
  ) : (
    <div className="container mx-auto p-4 center">home</div>
  );
};

export default Home;
