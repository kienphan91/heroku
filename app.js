//es5 1
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
/* Loading the environment variables from the .env file. */
require("dotenv").config();

/* Importing the user routes from the routes folder. */
const userRoutes = require("./routes/user");

//create server 2
/* Creating a server. */
const app = express();

//DB 6
mongoose
  .connect(process.env.MONGO_DB, {})
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//middleware
app.use("/api", userRoutes);

//home page 5
// app.get("/", (req, res) => {
//   res.json({ message: "Hello World" });
// });

//signup
// app.get("/signup", (req, res) => {
//   res.json({ message: "Login in here" });
// });

//signin
// app.get("/signin", (req, res) => {
//   res.json({ message: "New account" });
// });

//variables 3
const port = process.env.PORT;

//run server 4
/* Listening to the port and logging the message. */
app.listen(port || 8000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
