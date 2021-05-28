const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    foods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Food'
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
