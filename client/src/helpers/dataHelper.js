export const getToken = (code, state) => {
  const data = {
    code,
    state,
  };
  return fetch("http://localhost:3001/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return data.error;
      } else {
        const expires = new Date(new Date().getTime() + 60000 * 60);

        window.sessionStorage.setItem(
          "redditToken",
          JSON.stringify({
            expiresAt: expires,
            token: data.access_token,
          })
        );

        return data.access_token;
      }
    });
};

export const getRedditData = (userName, token) => {
  return fetch("http://localhost:3001/api/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, token }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const checkAuth = (token) => {
  return fetch("http://localhost:3001/api/checkAuth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })
    .then((res) => res.json())
    .then((data) => data.display_name);
};
