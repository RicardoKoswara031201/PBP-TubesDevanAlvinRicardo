import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Category from "./category";

@Table
export default class Product extends Model {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.INTEGER)
  price!: number;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  categoryId!: number;

  @BelongsTo(() => Category)
  category!: Category;

  @Column({
    field: "image_url",
    type: DataType.STRING
  })
  imageUrl!: string;
}
