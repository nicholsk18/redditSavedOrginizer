const express = require("express");
const router = new express.Router();
// const fetch = require("node-fetch");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const path = require("path");

router.post("/api/auth", (req, res, next) => {
  const { code, state } = req.body.data;

  console.log(code);
  const details = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3001/",
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  console.log(formBody);

  fetch(`https://www.reddit.com/api/v1/access_token`, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.REDDIT_USER}:${process.env.REDDIT_PASSWORD}`,
          "binary"
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
  // console.log(req.body);
});

module.exports = router;
