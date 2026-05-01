import express from "express";
import "reflect-metadata";

import { getCategories } from "../controllers/category.controller";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller";

import { createOrder } from "../controllers/order.controller";

const router = express.Router();

// CATEGORY
router.get("/categories", getCategories);

// PRODUCT
router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

// ORDER
router.post("/orders", createOrder);

export default router;