const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// it still uses schema -> could be more flexible tho - you can deviate from it sometimes
// ref -> manage relation between models
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// exporting our Model
// mongoose takes model name -> to lower case + plural as collection name
module.exports = mongoose.model("Product", productSchema);
