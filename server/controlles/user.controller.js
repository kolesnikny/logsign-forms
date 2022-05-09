const User = require('../models/user.model');

module.exports.createUser = async (req, res, next) => {
  const { body: validateBody } = req;

  const user = await new User(validateBody);
  res.status(201).send(user);
};

module.exports.getSingleUser = async (req, res, next) => {
  const {
    params: { email },
  } = req;

  const user = await User.findOne(email);
  res.status(200).send(user);
};
