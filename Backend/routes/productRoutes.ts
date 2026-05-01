import express from "express";
import { createProduct } from "../controllers/product.controller";
import { upload } from "../middleware/upload";

const router = express.Router();

router.post("/products", upload.single("image"), createProduct);

export default router;