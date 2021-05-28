const Food = require('../model/Food');
const User = require('../model/User');

const getFood = async (req, res) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findById(foodId);
    return res.status(200).json(food);
  } catch (err) {
    return res.status(400).json({ error: 'Cant find food' });
  }
};

const createFood = async (req, res) => {
  const { name, isMainFood } = req.body;
  const food = new Food({
    name: name,
    isMainFood: isMainFood,
    creator: req.userId
  });

  try {
    const result = await food.save();
    const user = await User.findById(req.userId);
    user.foods.push(food);
    await user.save();
    res.status(200).json({ ...result._doc, _id: result.id });
  } catch (err) {
    res.status(400).json({ error: 'Cant not save to database' });
  }
};

const getFoods = async (req, res) => {
  const { isMainFood } = req.query;

  let foods;

  try {
    foods = await Food.find({ creator: req.userId });
  } catch (error) {
    res.status(500).json({ error: error });
  }

  // foods = foods.map(food =>
  //   isMainFood === 'true' ? food.isMainFood === true : food.isMainFood === false
  // );

  if (isMainFood) {
    foods = foods.filter(food => {
      if (isMainFood === 'true') {
        return food.isMainFood === true;
      }
      return food.isMainFood === false;
    });
  }

  res.status(200).json(foods);
};

const updateFood = async (req, res) => {
  const foodId = req.params.foodId;
  const food = await Food.findById(foodId);
  if (!food) {
    return res.status(400).json({ error: 'Food is not exist' });
  }
  const valueNeedToUpdate = req.body;

  try {
    //const updatedFood = await Food.findByIdAndUpdate();
    await Food.updateOne({ _id: foodId }, valueNeedToUpdate);
    return res.status(200).json({ message: 'Update successfull' });
  } catch (err) {
    return res.status(400).json({ error: 'Cant not update food' });
  }
};

const deleteFood = async (req, res) => {
  const foodId = req.params.foodId;

  if (!foodId) {
    res.status(400).json({ error: 'Dont have id' });
  }
  const food = await Food.findById(foodId);
  if (!food) {
    res.status(400).json({ error: 'Dont have that food' });
  }
  try {
    await Food.deleteOne(food);

    const user = await User.findById(req.userId);
    const indexFoodId = user.foods.indexOf(foodId);
    user.foods.splice(indexFoodId, 1);
    user.save();

    res.status(200).json({ message: 'Delete successful' });
  } catch (err) {
    res.status(500).json({ error: 'Cant not delete' });
  }
};

module.exports = { getFoods, getFood, createFood, updateFood, deleteFood };
