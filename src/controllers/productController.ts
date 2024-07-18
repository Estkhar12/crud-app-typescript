import express from "express";
import Product from "../models/product";

class ProductCotroller {
    getAllProduct = async(request: express.Request, response: express.Response) => {
        try {
            const product = await Product.find();
            return response.status(200).json({data: product})
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    getProduct = async(request: express.Request,response: express.Response)=> {
        try {
            const {id} = request.params;
            const product = await Product.findById(id)
            return response.status(200).json({data: product})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    createProduct = async(request: express.Request, response: express.Response) => {
        try {
             const {productName, price, description} = request.body;
        const product = new Product({
            productName,
            price,
            description
        })
        await product.save();
        return response.status(200).json({message: "Product Created!", data: product})
        } catch (error) {
            return console.log(error)
        }
    }

    updateProduct = async(request: express.Request, response: express.Response) => {
        try {
            const {id} = request.params;
            const {productName, price, description} = request.body;
        const product = await Product.findByIdAndUpdate(id)
        if(product){
            product.productName = productName;
            product.price = price;
            product.description = description;

            await product.save();
            return response.status(200).json({message: "product updated", data: product})
        }
        return response.status(200).json({message: "Product Created!", data: product})
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    deleteProduct = async(request: express.Request,response: express.Response)=> {
        try {
            const {id} = request.params;
            const product = await Product.findOneAndDelete({_id: id})
            return response.status(200).json({message: "product deleted",data: product})
        } catch (error) {
            return response.sendStatus(400);
        }
    }
}

export default  new ProductCotroller();

