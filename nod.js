//nose js

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js server!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

//express
const express = require("express");
const cors = require("cors");
const path = require("path");
const posts = require("./Routers/router");

// const app = express();

// const port = process.env.PORT || 5000;

//Connect files
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// );

// app.get("/about", (req, res) =>
//   res.sendFile(path.join(__dirname, "public", "about.html"))
// );
const app = express();
app.use(express.json());
app.use(cors());

//router
app.use("/api/posts", posts);

app.listen(8000, () => console.log("My name is Quintus"));
