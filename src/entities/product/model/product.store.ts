import { create } from "zustand";
import type { Product, ProductStore } from "@/entities/product/model/types.ts";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  currentProduct: null,
  setProducts: (products: Product[]) => set(() => ({ products })),
  setCurrentProduct: (product: Product) =>
    set(() => ({ currentProduct: product })),
}));
