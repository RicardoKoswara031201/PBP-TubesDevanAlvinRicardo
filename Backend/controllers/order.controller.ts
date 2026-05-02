import { Request, Response } from "express";
import  Order  from "../models/order";
import  OrderItem  from "../models/orderItem";

//CREATE ORDER
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

// GET ORDER
export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.findAll({
      include: [OrderItem],
    });

    return res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};