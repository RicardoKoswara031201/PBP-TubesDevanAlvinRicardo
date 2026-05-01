import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/app";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      appConfig.jwtSecret,
      { expiresIn: appConfig.jwtExpiry }
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    return res.json({
      message: "User ditemukan",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const resetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const { username, newPassword } = req.body;

    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hashedPassword,
    });

    return res.json({
      message: "Password berhasil direset",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Reset password gagal",
    });
  }
};