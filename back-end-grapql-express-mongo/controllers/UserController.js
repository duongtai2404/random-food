const User = require('../model/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ error: 'User not found' });
  }
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({
    email: email,
    password: password,
    foods: []
  });

  const exitUser = await User.findOne({ email: email });
  if (exitUser) {
    return res.status(400).json({
      error: 'Email is exit'
    });
  }

  try {
    const result = await user.save();
    return res.status(200).json({
      ...result._doc,
      _id: result._id
    });
  } catch (err) {
    return res.status(500).json({ error: 'Cant save' });
  }
};

module.exports = { getUsers, createUser };
