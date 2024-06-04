const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Task", WorkSchema);
