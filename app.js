const express = require("express");
const app = express();

const port = 8080;
const options = {
  root: __dirname,
};

app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.get("/contact", (req, res) => {
  res.sendFile("contact.html", options);
});

app.use((req, res, next) => {
  res.status(404).sendFile("404.html", options);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
