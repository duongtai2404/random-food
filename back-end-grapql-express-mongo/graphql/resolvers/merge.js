const Food = require('../../model/Food');
const User = require('../../model/User');

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return transformUser(user);
  } catch (err) {
    throw err;
  }
};

const foods = async foodsId => {
  try {
    const foods = await Food.find({ _id: { $in: foodsId } });
    return foods.map(food => transformFood(food));
  } catch (err) {
    throw err;
  }
};

const transformUser = user => {
  return {
    ...user._doc,
    _id: user.id,
    foods: foods.bind(this, user._doc.foods)
  };
};

const transformFood = food => {
  return {
    ...food._doc,
    _id: food.id,
    creator: user.bind(this, food._doc.creator)
  };
};

module.exports = { transformFood, transformUser };
