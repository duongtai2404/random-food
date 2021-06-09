const Food = require('../../model/Food');
const { transformFood } = require('./merge');

const foodResolver = {
  foods: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated');
    }
    const result = await Food.find({ creator: req.userId });
    return result.map(food => transformFood(food));
  },
  createFood: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated');
    }

    const { name, isMainFood } = args.foodInput;
    const food = new Food({
      name: name,
      isMainFood: isMainFood,
      creator: req.userId
    });

    try {
      const result = await food.save();
      return transformFood(result);
    } catch (error) {
      throw error;
    }
  },
  deleteFood: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated');
    }
    try {
      await Food.deleteOne({ _id: args._id });
      return 'Delete successful';
    } catch (err) {
      throw new Error('Delete fail');
    }
  },
  updateFood: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated');
    }

    const { name, isMainFood } = args.foodInput;

    try {
      const food = await Food.findById(args._id);
      food.name = name;
      food.isMainFood = isMainFood;
      await food.save();
      return 'Update Success';
    } catch (err) {
      throw new Error('Update fail');
    }
  }
};

module.exports = foodResolver;
