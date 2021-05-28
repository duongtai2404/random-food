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
  }
};

module.exports = foodResolver;
