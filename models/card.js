const mongoose = require('mongoose');

const cardSchema = const new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v){
        const urlRegexExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        return urlRegexExpression.test(v)
      },
      message: "The submitted link is broken"
    }
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
  },
  likes: {
    default: [],
  },
  createdAt: {
    default: new Date.now,
  }
});

module.exports = mongoose.model('card', cardSchema);
