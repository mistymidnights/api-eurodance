const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  dicsname: { type: String, required: true },
  songname: { type: String, unique: true, required: true },
  group: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, unique: true, required: true },
  info: [{ type: Schema.Types.ObjectId, ref: "infogroup", required: true }],
});

module.exports = mongoose.model("eurodance", schema);
