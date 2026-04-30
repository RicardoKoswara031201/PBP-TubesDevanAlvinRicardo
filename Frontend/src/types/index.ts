export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  category?: Category;
  imageUrl?: string;
}

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  qty: number;
}
