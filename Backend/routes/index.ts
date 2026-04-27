import express from "express";
import { getCategories } from "../controllers/category.controller";
import { getProducts } from "../controllers/product.controller";
import { createOrder } from "../controllers/order.controller";
// import { getOrderItems } from "../controllers/orderItem.controller";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/products", getProducts);
router.post("/orders", createOrder);
// router.get("/order-items", getOrderItems);

export default router;