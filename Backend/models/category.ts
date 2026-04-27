import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import  Product  from "./product";

@Table
export default class Category extends Model {
  @Column(DataType.STRING)
  name!: string;

  @HasMany(() => Product)
  products!: Product[];
}