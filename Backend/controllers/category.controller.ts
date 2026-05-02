import { Request, Response } from "express";
import  Category  from "../models/category";

export const getCategories = async (_req: Request, res: Response) => {
  const data = await Category.findAll();
  res.json(data);
};