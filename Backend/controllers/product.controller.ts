import { Request, Response } from "express";
import Product from "../models/product";
import Category from "../models/category";

// GET PRODUCTS
export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await Product.findAll({
      include: [Category],
    });

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

// CREATE PRODUCT
export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log("CREATE PRODUCT HIT");
    console.log("BODY:", req.body);
    console.log("FILE:", (req as any).file);

    const { name, price, categoryId } = req.body;
    const file = (req as any).file;

    const imageUrl = file
      ? `/images/${file.filename}`
      : null;

    const product = await Product.create({
      name,
      price,
      categoryId,
      imageUrl: imageUrl,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);
    return res.status(500).json({
      message: "Failed to create product",
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { price } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.update({ price });

    return res.json({
      message: "Price updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to update product",
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.destroy();

    return res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};