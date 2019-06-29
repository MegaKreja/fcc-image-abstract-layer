const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  term: {
    type: String,
    required: true
  },
  when: { type: Date, default: Date.now }
})

module.exports = mongoose.model("History", historySchema);