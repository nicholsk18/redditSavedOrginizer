import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./components/Card";

const Dashboard = () => {
  const navigate = useNavigate();
  const [redditData, setRedditData] = useState(null);
  const [isAuth, setIsAuth] = useState(
    window.sessionStorage.getItem("redditAuth")
  );
  const [hasToken, setHasToken] = useState(
    window.sessionStorage.getItem("redditToken")
  );

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
          if (data.error) {
            setIsAuth(null);
            setHasToken(null);
          } else {
            const expires = new Date(new Date().getTime() + 60000 * 60);

            window.sessionStorage.setItem(
              "redditToken",
              JSON.stringify({
                expiresAt: expires,
                token: data.access_token,
              })
            );

            setHasToken(data.access_token);
          }
        });
    });
  } else {
    // window.sessionStorage.removeItem("redditAuth");
    // navigate("/", { replace: true });
  }

  if (!isAuth || !hasToken) {
    console.log(isAuth + " isAuth");
    console.log(hasToken + " hasToken");
    // window.sessionStorage.removeItem("redditAuth");
    // window.sessionStorage.removeItem("redditToken");
    // navigate("/", { replace: true });
  }

  useEffect(() => {
    console.log("useEffect");
    // fetch("/api/getData", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token: hasToken }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
