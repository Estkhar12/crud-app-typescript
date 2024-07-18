import express from "express";
import productController from "../controllers/productController";

const router = express.Router();

router.get("/getAllProduct", productController.getAllProduct);
router.get("/getProduct", productController.getProduct);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

export default router;