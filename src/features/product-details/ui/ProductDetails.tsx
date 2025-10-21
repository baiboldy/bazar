import { ProductInfo } from "@/entities/product/ui/ProductInfo/ProductInfo.tsx";
import type { Product } from "@/entities/product/model/types.ts";

type Props = {
  product: Product;
};

export function ProductDetails({ product }: Props) {
  return <ProductInfo product={product} />;
}
