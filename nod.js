// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js server!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Mane is Quintus"));
app.get("/user", (req, res) =>
  res.json({ name: "John", age: 20, email: "jbenimana5@gmail.com" })
);
app.listen(3000, () => console.log("My name"));
