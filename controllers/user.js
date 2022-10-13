const User = require("../models/user");

// exports.sayHello = (req, res) => {
//   res.json({ message: "Hello World" });
// };

// exports.signUp = (req, res) => {
//     res.json({message: "New Account"})
// }

// exports.signIn = (req, res) => {
//   res.json({ message: "Log in" });
// };

exports.signUp = (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    res.json({ user });
  });
};
