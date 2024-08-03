const express = require("express");
const app = express();
const port = 9000;

// user data
const users = [
  { id: 1, name: "Sunil", email: "sunil@example.com" },
  { id: 2, name: "Vikash", email: "vikash@example.com" },
  { id: 3, name: "Kajal", email: "kajal@example.com" },
];

// send request to this endpoint to get the data
app.get("/api/userdata", (req, res) => {
  res.json(users);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
