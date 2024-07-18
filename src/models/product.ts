
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Product Schema
const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: [true, "Product must have a name"],
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }  
    },
    { timestamps: true }
);

// Creating Model out of the schema
const Product = mongoose.model("Product", productSchema);
export default Product;
