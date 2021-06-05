const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../model/User');
const { transformUser } = require('./merge');

const userResolver = {
  users: async () => {
    try {
      const result = await User.find();

      return result.map(user => transformUser(user));
    } catch (err) {
      throw err;
    }
  },
  createUser: async args => {
    const { email, password } = args.userInput;
    const user = new User({
      email: email,
      password: bcrypt.hashSync(password, 12),
      foods: []
    });

    const exitUser = await User.findOne({ email: email });
    if (exitUser) {
      throw new Error('Email is existed');
    }

    try {
      const result = await user.save();
      return transformUser(result);
    } catch (err) {
      return { error: 'Cant save' };
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('Email does not exist!');
    }

    const isEqualPassword = bcrypt.compareSync(password, user.password);

    if (!isEqualPassword) {
      throw new Error('Password is not correct');
    }

    const token = jwt.sign({ userId: user.id, email: email }, 'somesecretkey', {
      expiresIn: '1h'
    });

    return {
      userId: user.id,
      email: email,
      token: token,
      tokenExpiration: 1
    };
  }
};

module.exports = userResolver;
