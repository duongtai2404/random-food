const userResolver = require('./UserResolver');
const foodResolver = require('./FoodResolver');

const resolver = {
  ...userResolver,
  ...foodResolver
};

module.exports = resolver;
