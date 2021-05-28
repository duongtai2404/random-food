const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../model/User');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(400).json({ error: 'Email does not exist!' });
  }

  console.log(user.password);

  const isEqualPassword = bcrypt.compareSync(password, user.password);
  if (!isEqualPassword) {
    res.status(400).json({ error: 'Password is invalid' });
  }

  const token = jwt.sign({ userId: user.id, email: email }, 'somesecretkey', {
    expiresIn: '1h'
  });

  res
    .status(200)
    .json({ userId: user.id, email: email, token: token, tokenExpiration: 1 });
};

module.exports = { loginController };
