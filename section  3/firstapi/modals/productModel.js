const mongoose = require('../connection');

const mySchema = new mongoose.Schema({
    name: String,
    price: String,
    height: String,
    width :String ,
    thumbnail : String,
    createdAt : {type :Date ,default: new Date() }

})

const myModel = mongoose.model("product",mySchema);

module.exports = myModel;