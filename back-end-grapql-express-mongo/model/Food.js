const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    isMainFood: {
      type: Boolean,
      require: true,
      default: false
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Food', foodSchema);
