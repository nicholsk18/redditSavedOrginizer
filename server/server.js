const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api/api");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/./../.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(api);

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

const server = app.listen(port, "localhost", () => {
  console.log(`Server is up on port ${port}`);
});

// for sending mail
// process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"
