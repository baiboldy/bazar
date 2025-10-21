export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type CreateProduct = Omit<Product, "id">;

export type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};
