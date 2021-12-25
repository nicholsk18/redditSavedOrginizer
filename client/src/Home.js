import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./Dashboard";
import { getToken } from "./helpers/dataHelper";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const [hasToken, setHasToken] = useState(
    window.sessionStorage.getItem("redditToken")
  );

  if (code && state) {
    useEffect(async () => {
      const token = await getToken(code, state);
      setHasToken(token);
      navigate("/", { replace: true });
    });
  }

  return !hasToken ? <Login /> : <Dashboard />;
};

export default Home;
