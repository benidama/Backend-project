const express = require("express");
const router = express.Router();

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

//get data with limit
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(users.slice(0, limit));
  } else {
    res.json(users);
  }
});

//get data with id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //res.json(users.filter((user) => user.id === id));
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .json(`msg:{user not found on number ${id}} with router`);
  }
  res.status(200).json(user);
});

//create new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };
  if (!newUser.name) {
    return res.status(404).json(`mssg: New error`);
  }
  users.push(newUser);
  res.status(200).json(users);
});

module.exports = router;
