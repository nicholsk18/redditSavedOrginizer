import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./Dashboard";
import { getToken, checkAuth } from "./helpers/dataHelper";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const [hasToken, setHasToken] = useState(
    window.sessionStorage.getItem("redditToken")
  );

  useEffect(async () => {
    if (code && state) {
      const token = await getToken(code, state);
      setHasToken(token);
      navigate("/", { replace: true });
    }
  }, [state, code]);

  useEffect(async () => {
    if (hasToken) {
      const token = JSON.parse(hasToken).token;
      const display_name = await checkAuth(token);
      if (!display_name) {
        setHasToken(null);
        window.sessionStorage.removeItem("redditToken");
      }
    }
  }, [hasToken]);

  return !hasToken ? <Login /> : <Dashboard />;
};

export default Home;
