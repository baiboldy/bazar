import { create } from "zustand";
import type { Product, ProductStore } from "@/entities/product/model/types.ts";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set(() => ({ products })),
}));
