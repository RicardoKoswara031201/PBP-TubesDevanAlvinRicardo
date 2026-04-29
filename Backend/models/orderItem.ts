import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Order from "./order";
import Product from "./product";

@Table
export default class OrderItem extends Model {
  @ForeignKey(() => Order)
  @Column(DataType.INTEGER)
  orderId!: number;

  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId!: number;

  @Column(DataType.INTEGER)
  qty!: number;

  @BelongsTo(() => Product)
  product!: Product;

  @BelongsTo(() => Order)
  order!: Order;
}