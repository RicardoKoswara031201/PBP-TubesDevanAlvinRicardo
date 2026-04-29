import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
  tableName: "users" // 🔥 INI PENTING
})
export default class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  declare username: string;

  @Column(DataType.STRING)
  declare password: string;

  @Column(DataType.STRING)
  declare role: string;
}