const Term = require("../models/Term");

exports.home = async (req, res) => {
  const thunderPost = req.body.test;
  console.log(thunderPost);
  res.send(thunderPost);
};
