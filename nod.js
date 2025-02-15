// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js server!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

const express = require("express");
const path = require("path");
// const port = process.env.PORT || 5000;
const app = express();
let users = [
  {
    id: 1,
    name: "John",
    age: 20,
    email: "jbenimana5@gmail.com",
    password: "Esmara",
  },
  {
    id: 2,
    name: "Joanes",
    age: 27,
    email: "jbenimana5@gmail.com",
    password: "Esmararrr",
  },
  {
    id: 3,
    name: "Quintus",
    age: 28,
    email: "jbenimana5@gmail.com",
    password: "Esmara23",
  },
  {
    id: 4,
    name: "Aime",
    age: 25,
    email: "jbenimana5@gmail.com",
    password: "Esmara56",
  },
];

app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// );
app.get("/api/user", (req, res) => res.json(users));
app.get("/api/user/:id", (req, res) => {
  console.log(req.params);
  res.json(users);
});
// app.get("/about", (req, res) =>
//   res.sendFile(path.join(__dirname, "public", "about.html"))
// );
app.listen(8000, () => console.log("My name is Quintus"));
