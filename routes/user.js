/* Importing the express module. */
const express = require("express");

/* Creating a router object. */
const router = express.Router();

const { signUp } = require("../controllers/user");

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
// router.get("/", sayHello);

// //signup
// router.get("/login", signUp);

//signin
// router.get("/signin", signIn);

router.post("/signup", signUp);

module.exports = router;
