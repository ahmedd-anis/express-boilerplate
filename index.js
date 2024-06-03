const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/hello", (req, res) => {
  return res
    .status(200)
    .send(`Hello ${req.body.name ? req.body.name : "user"}`);
});

app.get("/about", (req, res) => {
  return res.status(200).json({
    message: "About Dummy Server",
    description:
      "This is a simple Express.js server for demonstration purposes.",
    version: "1.0",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
