import express from "express";
import "reflect-metadata";

import { getCategories } from "../controllers/category.controller";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

import {
  createOrder,
  getOrders,
} from "../controllers/order.controller";

import { getUsers } from "../controllers/user.controller";

import { upload } from "../middleware/upload";

const router = express.Router();

// CATEGORY
router.get("/categories", getCategories);

// PRODUCT
router.get("/products", getProducts);
router.post("/products", upload.single("image"), createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// ORDER
router.get("/orders", getOrders);
router.post("/orders", createOrder);

// USER
router.get("/users", getUsers);

export default router;