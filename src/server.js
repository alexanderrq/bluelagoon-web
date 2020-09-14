const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("/dist/bluelagoon-web"));
app.get("/", function (req, res) {
  res.sendFile(path.join("/dist/bluelagoon-web/index.html"));
});

app.listen(process.env.PORT || 8080);
