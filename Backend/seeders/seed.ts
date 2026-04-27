import  Category  from "../models/category";
import  Product  from "../models/product";

export const seedData = async () => {
  await Category.bulkCreate([
    { name: "Burger" },
    { name: "Minuman" },
  ]);

  await Product.bulkCreate([
    { name: "Big Mac", price: 35000, categoryId: 1 },
    { name: "Coca Cola", price: 10000, categoryId: 2 },
  ]);

  console.log("Seed success");
};