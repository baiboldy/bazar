import { useTransition, useEffect } from "react";
import { useProductStore } from "@/entities/product/model/product.store.ts";
import { productApi } from "@/entities/product/api/product.api.ts";

export const useProducts = () => {
  const { products, setProducts } = useProductStore();
  const [isPending, startTransition] = useTransition();

  async function fetchProducts(): Promise<void> {
    startTransition(async () => {
      const data = await productApi.getProducts();
      setProducts(data);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isPending };
};
