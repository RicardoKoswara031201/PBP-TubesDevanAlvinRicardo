import { Request, Response } from "express";
import  Product  from "../models/product";
import  Category  from "../models/category";

export const getProducts = async (req: Request, res: Response) => {
  const data = await Product.findAll({
    include: [Category],
  });

  res.json(data);
};