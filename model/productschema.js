const mongoose = require("mongoose");

var products = new mongoose.Schema({
  productname: {
    type: String,
    reqired: true,
  },
  price: {
    type: Number,
    reqired: true,
  },
  category: {
    type: String,
    reqired: true,
  },
  productimage:{
    type:String,
    reqired: true
  },
  description: {
    type: String,
    reqired: true,
  },
});

const products1 = new mongoose.model("product", products);
module.exports = products1;
