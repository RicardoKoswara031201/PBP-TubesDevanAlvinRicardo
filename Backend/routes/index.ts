import express from "express";
import "reflect-metadata";

import { getCategories } from "../controllers/category.controller";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

import { createOrder } from "../controllers/order.controller";
import { upload } from "../middleware/upload";

const router = express.Router();

// CATEGORY
router.get("/categories", getCategories);

// PRODUCT
router.get("/products", getProducts);

// CREATE PRODUCT
router.post("/products", upload.single("image"), createProduct);

// UPDATE PRODUCT
router.put("/products/:id", updateProduct);

// DELETE PRODUCT
router.delete("/products/:id", deleteProduct);

// ORDER
router.post("/orders", createOrder);

export default router;