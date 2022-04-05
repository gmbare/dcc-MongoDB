///TODO: Create a schema
//TODO: create a model from schema

//? What is a scheme?//
//* A schem is a set of rules that defines the shape of a single document in MongoDB


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type: String, required:true, minlength:2, maxlength:255}, 
    description:{type: String, required:true, minlength:2}, 
    category:{type: String, required:true, minlength:2, maxlength:255}, 
    price:{type: Number, required:true}, 
    dateAdded:{type: Date, default:Date.now()}
})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;