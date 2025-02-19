const express = require("express");
// const { default: logger } = require("../middleware/middle");
const router = express.Router();

// let users = [
//   {
//     id: 1,
//     name: "John",
//     age: 20,
//     email: "jbenimana5@gmail.com",
//     password: "Esmara",
//   },
//   {
//     id: 2,
//     name: "Joanes",
//     age: 27,
//     email: "jbenimana5@gmail.com",
//     password: "Esmararrr",
//   },
//   {
//     id: 3,
//     name: "Quintus",
//     age: 28,
//     email: "jbenimana5@gmail.com",
//     password: "Esmara23",
//   },
//   {
//     id: 4,
//     name: "Aime",
//     age: 25,
//     email: "jbenimana5@gmail.com",
//     password: "Esmara56",
//   },
// ];

const posts = [
  {
    id: 1,
    name: "Kanuma",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Joni",
  },
  {
    id: 4,
    name: "Kamali",
  },
  {
    id: 5,
    name: "Anna",
  },
];

//get data with limit
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//get data with id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //res.json(users.filter((user) => user.id === id));
  const user = posts.find((user) => user.id === id);
  if (!user) {
    return res
      .status(404)
      .json(`msg:{user not found on number ${id} with router`);
  }
  res.status(200).json(user);
});

//create new user
router.post("/", (req, res) => {
  const { id, name } = req.body;
  const newUser = {
    id,
    name,
  };
  if (!name) {
    return res.status(404).json({ msg: "There is no such files" });
  }
  posts.push(newUser);
  res.status(200).json(posts);
});

module.exports = router;
