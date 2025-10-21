import type { Category } from "@/entities/category/model/types.ts";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;
  categories: Category[];
};

export type CreateProduct = Omit<Product, "id">;

export type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  currentProduct: Product | null;
  setCurrentProduct: (product: Product) => void;
};
