import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};