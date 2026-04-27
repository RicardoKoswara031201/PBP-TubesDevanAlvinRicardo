import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import  OrderItem  from "./orderItem";

@Table
export default class Order extends Model {
  @Column(DataType.INTEGER)
  total!: number;

  @HasMany(() => OrderItem)
  items!: OrderItem[];
}