const mongoose = require ("mongoose");

const ProductSchema = mongoose.Schema (
    {
        title : { type: String, require: true},
        img : { type: String, require: true},
        price : { type: Number, require: true},
        category : {type: String, require: true}
    },

    {
        timestaps : true 
    }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;