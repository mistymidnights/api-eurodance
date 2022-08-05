const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  genre: { type: String, required: true },
  info: { type: String, required: true },
});

module.exports = mongoose.model("infogroup", schema);

