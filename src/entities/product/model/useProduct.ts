import { useProductStore } from "@/entities/product/model/product.store.ts";
import { useEffect, useTransition } from "react";
import { productApi } from "@/entities/product/api/product.api.ts";

export const useProduct = (id: number) => {
  const { setCurrentProduct, currentProduct } = useProductStore();
  const [isPending, startTransition] = useTransition();

  async function fetchProduct(id: number) {
    startTransition(async () => {
      const result = await productApi.getProductById(id);
      setCurrentProduct(result);
    });
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return { currentProduct, isPending };
};
