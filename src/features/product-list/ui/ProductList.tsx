import { Grid, CircularProgress } from "@mui/material";
import { useProducts } from "@/entities/product/model/useProducts.ts";
import { ProductCard } from "@/entities/product/ui/ProductCard/ProductCard.tsx";

type Props = {
  onShare: VoidFunction;
  onFavorite: VoidFunction;
};

export function ProductList({ onFavorite, onShare }: Props) {
  const { products, isPending } = useProducts();

  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid size={2} key={product.id}>
          <ProductCard
            key={product.id}
            product={product}
            onShare={onShare}
            onFavorite={onFavorite}
          />
        </Grid>
      ))}
    </Grid>
  );
}
