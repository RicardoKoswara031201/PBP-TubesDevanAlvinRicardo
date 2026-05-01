import { Request, Response } from "express";
import Product from "../models/product";
import Category from "../models/category";

// GET PRODUCTS
export const getProducts = async (req: Request, res: Response) => {
  const data = await Product.findAll({
    include: [Category],
  });

  res.json(data);
};

// CREATE PRODUCTS
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, categoryId } = req.body;

    const product = await Product.create({
      name,
      price,
      categoryId,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create product",
    });
  }
};

// DELETE PRODUCTS
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