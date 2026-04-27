import { Request, Response } from "express";
import  Order  from "../models/order";
import  OrderItem  from "../models/orderItem";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items, total } = req.body;

    const order = await Order.create({ total });

    const orderItems = items.map((item: any) => ({
      orderId: order.id,
      productId: item.productId,
      qty: item.qty,
    }));

    await OrderItem.bulkCreate(orderItems);

    res.json({ message: "Order created", order });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};