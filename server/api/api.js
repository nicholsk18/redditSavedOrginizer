const express = require("express");
const router = new express.Router();
const path = require("path");

router.get("/api/auth", (req, res, next) => {
  console.log(req.query);
  next();
});

module.exports = router;
